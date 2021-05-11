import React from 'react';

import Header from './Header';
import Messages from './Messages';
// import Footer from './Footer';

const Chat = ({ data }) => {
  return (
    <>
      <Header user={data.user} />
      <Messages messages={data.chat} />
      {/* <Footer /> */}
    </>
  );
};

export default Chat;
