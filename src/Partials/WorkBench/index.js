import React, { memo } from 'react';
import styled from 'styled-components';

import UnselectedChat from 'assets/img/unselected-chat.svg';
import { Container } from 'Styled/base';
import { TextSecondary } from 'Styled/styles';

// App
import ChatApplication from 'Resource/Chat';

const Wrapper = styled.div`
  width: 100%;
`;

const UnselectedContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Unselected = styled.div`
  top: 37%;
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1.7rem;
`;

const Text = styled.p`
  ${TextSecondary};
  font-size: 16px;
  font-weight: 300;
`;

const Workbench = ({ data }) => {
  if (!data?.user) {
    return (
      <UnselectedContainer>
        <Unselected>
          <Image
            src={UnselectedChat}
            width={200}
            alt="unselected"
          />
          <Text>Select a chat to read messages</Text>
        </Unselected>
      </UnselectedContainer>
    );
  }

  return (
    <Container>
      <Wrapper>
        <ChatApplication data={data} />
      </Wrapper>
    </Container>
  );
};

export default memo(Workbench);
