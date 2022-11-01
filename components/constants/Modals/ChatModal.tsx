import axios from "axios";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import EVENTS from "../../../config/events";
import { useSockets } from "../../../context/socket.context";
import { useAppSelector } from "../../../redux/hooks";

const ChatModal = ({
  setShowChatModal,
  ...props
}: {
  setShowChatModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useAppSelector((state) => state.user.user);
  const { socket, messages, setMessages, roomId } = useSockets();
  const [message, setMessage] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      axios
        .get("/api/getMessages", {
          headers: {
            tripid: id,
          },
        })
        .then((res) => setMessages(res.data));
    }
  }, [router]);

  const handleSendMessage = () => {
    const date = new Date();
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, {
      roomId,
      message,
      userId: user!.id,
      dateSent: date,
    });

    setMessages([
      ...messages!,
      {
        message,
        roomId,
        userId: user!.id,
        dateSent: format(date, "HH:bb"),
      },
    ]);

    axios
      .post("/api/addMessage", {
        roomId,
        message,
        userId: user?.id,
        dateSent: date,
      })
      .then((res) => console.log(res.data));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-25">
      <div className=" w-1/2 relative bg-white text-center p-5">
        <h3 className="uppercase font-bold">Group Chat</h3>
        <div className="h-96 bg-gray-100 rounded mt-10 overflow-y-scroll">
          <div className="flex flex-col p-5">
            {messages &&
              messages.map((message, idx) => (
                <div
                  key={idx}
                  className="flex flex-col my-2 items-start bg-white rounded-2xl p-5"
                >
                  <span className="text-lg font-bold">{message.userId}</span>
                  <span className="text-base">{message.message}</span>
                  <span className="text-sm text-gray-400">
                    {String(message.dateSent)}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full flex items-center h-10 rounded-2xl px-5 mt-5">
          <input
            placeholder="Message..."
            className="w-full h-full rounded-2xl px-5 border border-gray-200"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <RiSendPlaneFill
            onClick={handleSendMessage}
            className="inline h-8 w-8 p-1 -m-9 bg-green-500 rounded-full text-white"
          />
        </div>
        <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
          <button
            className="rounded-full h-full w-full border border-2 border-white"
            onClick={() => setShowChatModal(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
