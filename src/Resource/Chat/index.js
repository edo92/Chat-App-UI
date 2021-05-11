import React from 'react';

import Header from './Header';
import Messages from './Messages';
import MessageKit from './MessageKit';

const Chat = ({ data }) => {
  return (
    <>
      <Header user={data.user} />
      <Messages messages={data.chat} />
      <MessageKit />
    </>
  );
};

export default Chat;
