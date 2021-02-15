import React from "react";
import ChatCard from "./cards/ChatCard";
import Controls from "./Controls";
export default function ChatList() {
  return (
    <>
      <Controls />
      <section className="chat-list">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </section>
    </>
  );
}
