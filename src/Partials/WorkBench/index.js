import React, { memo } from 'react';
import { Container, Inner } from 'Styled/base';
import Empty from 'Components/Empty';

// App
import ChatApplication from 'Resource/Chat';

const Workbench = ({ data }) => {
  if (!data?.user) {
    return (
      <Empty 
        svg={'unselected'} 
        title="Select a chat" 
      />
    );
  }

  return (
    <Container>
      <Inner>
        <ChatApplication data={data} />
      </Inner>
    </Container>
  );
};

export default memo(Workbench);
