import React from "react";
import { Link } from "@reach/router";

export default function ChatCard() {
  return (
    <section className="chat-card">
      <p>This is a chat card</p>
      <Link to="/chat-page/chat_id">This link goes to the chat page</Link>
    </section>
  );
}
