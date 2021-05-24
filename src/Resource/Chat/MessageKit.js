import React, { memo } from 'react';
import styled from 'styled-components';

import Button from 'Components/Button';
import { Input, BorderBox } from 'Styled/shared';
import { List as Ul, ListItem as Ui } from 'Styled/base';

const Container = styled(BorderBox)`
  padding: 18px 20px;
  position: relative;

  & .inputmessage {
    width: 100%;
  }
`;

const List = styled(Ul)`
  display: flex;
  align-items: center;
  width: 100%:
`;

const ListItem = styled(Ui)`
  position: relative;
  display: block;
  margin: 0 0.55rem;
`;

const Form = styled.form`
  width: 100%;
`;

const InputMessage = styled(Input)`
  padding: 11px 15px;
  width: 100%;
`;

const Footer = memo(() => {
  // Handlers

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    console.log('select File');
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <List>
          <ListItem>
            <Button
              onClick={handleSelectFile}
              icon={'Smile'}
            />
          </ListItem>
          <ListItem className="inputmessage">
            <InputMessage
              onChange={handleSelectFile}
              placeholder="write a message"
            />
          </ListItem>
          <ListItem>
            <Button
              onClick={handleSelectFile}
              icon={'Paperclip'}
            />
          </ListItem>
          <ListItem>
            <Button
              icon={'Send'}
              color={'#fff'}
              type={'primary'}
            />
          </ListItem>
        </List>
      </Form>
    </Container>
  );
});

export default Footer;
