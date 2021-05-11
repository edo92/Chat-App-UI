import React from 'react';

import Header from './Header';

const Chat = ({ data }) => {
  return (
    <>
      <Header user={data.user} />
    </>
  );
};

export default Chat;
