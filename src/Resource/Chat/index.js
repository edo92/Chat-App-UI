import React, { memo } from 'react';

import Header from './Header';
import Messages from './Messages';
import MessageKit from './MessageKit';

const Chat = memo(({ data }) => (
  <>
    <Header user={data.user} />
    <Messages messages={data.chat} />
    <MessageKit />
  </>
));

export default Chat;
