import React, { memo } from 'react';
import styled from 'styled-components';
import UserFigure from 'Components/UserFigure';
import { Scrollbar } from 'Styled/shared';

import {
  SmallPrimary,
  MessageStyle,
} from 'Styled/shared';

const Container = styled(Scrollbar)`
  height: calc(100% - 220px);
  padding: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.div`
  max-width: 65%;
  margin-bottom: 3rem;
  margin-left: ${(props) => props.outgoing && 'auto'};
`;

const UserContainer = styled.div`
  justify-content: flex-end;
`;

const UserInfo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  line-height: 1.4;
  float: ${(props) => props.outgoing && 'right'};
`;

const MessageContent = styled.div`
  position: relative;
  display: inline-block;
`;

const Message = styled(MessageStyle)`
  border-radius: 7px;
  padding: 10px 20px;
  min-width: 115px;
  line-height: 1.5;
  font-size: 14px;
`;

const Messages = memo(({ messages = [] }) => (
  <Container>
    <Wrapper>
      {messages.map(
        ({ outgoing, name, avatar, date, text }) => (
          <Content
            outgoing={outgoing}
            key={`${name}${date}`}
          >
            <UserContainer>
              <UserInfo outgoing={outgoing}>
                <UserFigure
                  name={name}
                  fontSize={'sm'}
                  avatar={avatar}
                  text={
                    <SmallPrimary>
                      <>{date}</>
                    </SmallPrimary>
                  }
                />
              </UserInfo>
            </UserContainer>
            <MessageContent>
              <Message outgoing={!!outgoing}>
                <span>{text}</span>
              </Message>
            </MessageContent>
          </Content>
        ),
      )}
    </Wrapper>
  </Container>
));

export default Messages;
