import React from 'react';
import useSocket from 'use-socket.io-client';
import MessageList from './MessageList';
import ChatMembers from './ChatMembers';
import InputMessage from './InputMessage';

export default function ChatPage() {
  const [socket] = useSocket('ws://localhost:8080', {
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
