import React from 'react';
import MessageCard from './cards/MessageCard';

export default function MessageList() {
  return (
    <section className="message-list">
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </section>
  );
}
