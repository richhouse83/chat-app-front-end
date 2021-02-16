import React from "react";
import MessageList from "../components/MessageList";
import ChatMembers from "./ChatMembers";
import InputMessage from "./InputMessage";
import useSocket from "use-socket.io-client";

export default function ChatPage() {
  const [socket] = useSocket("ws://localhost:8080", {
    autoConnect: false,
  });

  socket.connect();

  return (
    <section className="chat-page">
      <p>This is the chat page</p>
      <ChatMembers />
      <MessageList />
      <InputMessage socket={socket} />
    </section>
  );
}
