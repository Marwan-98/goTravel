import { createContext, useContext, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import EVENTS from "../config/events";

const socket = io("http://localhost:4000");

interface Context {
  socket: Socket;
  roomId?: number;
  rooms: {};
  messages?: { message: string; userId: number; dateSent: Date }[];
  setMessages: Function;
}

const SocektContext = createContext<Context>({
  socket,
  rooms: {},
  messages: [],
  setMessages: () => false,
});

function SocketsProvider(props: any) {
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState<
    { message: string; userId: number; tripId: number; dateSent: Date }[]
  >([]);

  socket.on("connect", function () {
    console.log("connect");
  });

  socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });

  socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomId(value);
    setMessages([]);
  });

  socket.on(
    EVENTS.SERVER.ROOM_MESSAGE,
    ({ message, userId, dateSent, tripId }) => {
      setMessages([...messages, { message, userId, dateSent, tripId }]);
    }
  );

  return (
    <SocektContext.Provider
      value={{ socket, roomId, rooms, messages, setMessages }}
      {...props}
    />
  );
}

export const useSockets = () => useContext(SocektContext);

export default SocketsProvider;
