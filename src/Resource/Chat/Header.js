import React, { memo } from 'react';
import styled from 'styled-components';

import UserFigure from 'Components/UserFigure';
import Button from 'Components/Button';
import Tooltip from 'Components/Tooltip';
import Dropdown from 'Components/Dropdown';

import { SmallPrimary, BorderBox } from 'Styled/shared';
import { List, ListItem as ItemList } from 'Styled/base';

import { dropmenu } from './menu';

const Container = styled(BorderBox)`
  display: flex;
  justify-content: space-between;
  padding: 17px 30px;
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

const ListAction = styled(List)`
  padding-left: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled(ItemList)`
  margin: 0 0 0.5rem 0.5rem;
`;

const Small = styled(SmallPrimary)`
  font-size: 13px;
  font-family: italic;
`;

const HeaderAction = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = memo(({ user }) => (
  <Container>
    <HeaderUser>
      <UserFigure
        name={user.name}
        avatar={user.avatar}
        text={<Small>{'5 minutes ago'}</Small>}
        status={user.status}
      />
    </HeaderUser>
    <HeaderAction>
      <ListAction>
        <ListItem>
          <Tooltip placement="bottom" title="Voice Call">
            <Button
              size={'sm'}
              icon={'Phone'}
              color={'#0abb87'}
            />
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip placement="bottom" title="Video call">
            <Button
              size={'sm'}
              icon={'Video'}
              color={'#ffb822'}
            />
          </Tooltip>
        </ListItem>
        <ListItem>
          <Dropdown
            placement={'bottomLeft'}
            top="20px"
            left="-20px"
            overlay={dropmenu()}
          >
            <Button
              icon={'MoreHorizontal'}
              size={'sm'}
            />
          </Dropdown>
        </ListItem>
      </ListAction>
    </HeaderAction>
  </Container>
));

export default memo(Header);
