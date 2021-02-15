import React from "react";
import MessageList from "../components/MessageList";
import ChatMembers from "./ChatMembers";
import InputMessage from "./InputMessage";

export default function ChatPage() {
  return (
    <section className="chat-page">
      <p>This is the chat page</p>
      <ChatMembers />
      <MessageList />
      <InputMessage />
    </section>
  );
}
