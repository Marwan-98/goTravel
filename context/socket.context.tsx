import { createContext, useContext, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import EVENTS from "../config/events";

const socket = io(SOCKET_URL);

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

  socket.once(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });

  socket.once(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomId(value);
    setMessages([]);
  });

  socket.once(
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
