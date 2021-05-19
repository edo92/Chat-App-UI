import React, { memo } from 'react';
import styled from 'styled-components';

import Tooltip from 'Components/Tooltip';
import Button from 'Components/Button';

import UserList from './UserList';
import { dropmenu } from './menu';

import { borderDynamic } from 'Styled/dynamic';
import {
  H1,
  Input,
  Section,
  Scrollbar,
} from 'Styled/shared';

import {
  List,
  ListItem,
  InnerContainer,
  Container as MainContainer,
} from 'Styled/base';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 80px;
  font-weight: 500;
`;

const Form = styled.form`
  display: block;
  padding: 17px 30px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const SearchBox = styled.div`
  dispay: inline-box;
  position: relative;
  width: 100%;
  height: 5.75rem;
`;

const SectionArea = styled(Section)`
  ${borderDynamic};
  border-top: none;
  border-bottom: none;
`;

const Container = styled(MainContainer)`
  width: 350px;
`;

const ButtonList = styled(List)`
  display: flex;
`;

const ButtonItem = styled(ListItem)`
  margin-left: 0.5rem;
`;

const SearchInput = styled(Input)`
  padding: 11.5px 15px;
`;

const SidebarBody = styled(Scrollbar)`
  height: calc(100% - 180px);
`;

const SideBar = memo(
  ({ data, uiState, apiHandlers, uiHandlers }) => (
    <SectionArea md="hidden">
      <Container>
        <InnerContainer>
          <Header>
            <H1>Chats</H1>
            <div>
              <ButtonList>
                <ButtonItem>
                  <Tooltip
                    placement="bottom"
                    title="Add Group"
                  >
                    <Button icon={'Users'} size="sm" />
                  </Tooltip>
                </ButtonItem>
                <ButtonItem>
                  <Tooltip
                    placement="bottom"
                    title="New Chat"
                  >
                    <Button
                      icon={'PlusCircle'}
                      size="sm"
                    />
                  </Tooltip>
                </ButtonItem>
              </ButtonList>
            </div>
          </Header>
          <SearchBox>
            <Form>
              <SearchInput
                onChange={() => {}}
                placeholder="Search chats"
              />
            </Form>
          </SearchBox>
          <SidebarBody>
            {(uiState.navTab === 'chat' || 'users') && (
              <UserList
                data={data}
                activeTab={uiState.navTab}
                handleFetch={apiHandlers.getMessage}
                overlay={dropmenu(
                  uiHandlers,
                  apiHandlers,
                )}
              />
            )}
          </SidebarBody>
        </InnerContainer>
      </Container>
    </SectionArea>
  ),
);

export default SideBar;
