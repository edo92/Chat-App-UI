import React, { memo } from 'react';
import styled from 'styled-components';

import Tooltip from 'Components/Tooltip';
import Icon from 'Components/Icon';
import { ButtonSimple } from 'Components/Button';

import {
  Container as MainContainer,
  InnerContainer,
  ListItem,
  List,
} from 'Styled/base';

import {
  Section,
  Input,
} from 'Styled/shared';

import { TextSecondary } from 'Styled/styles';
import { border } from 'Styled/colors';

const SectionArea = styled(Section)`
  border-right: 1px solid ${border};
`;

const Container = styled(MainContainer)`
  width: 350px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 80px;
  font-weight: 500;
`;

const Title = styled.span`
  color: ${TextSecondary};
  font-size: 22px;
  font-weight: 600;
`;

const ButtonList = styled(List)`
  display: flex;
`;

const ButtonItem = styled(ListItem)`
  margin-left: 0.5rem;
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

const SearchInput = styled(Input)`
  padding: 11.5px 15px;
`;

const SideBar = memo(
  ({ data, activeTab, apiHandlers, toggleDrawer }) => (
    <SectionArea md="visisble">
      <Container>
        <InnerContainer>
          <Header>
            <Title>Chats</Title>
            <div>
              <ButtonList>
                <ButtonItem>
                  <Tooltip
                    placement="bottom"
                    title="Add Group"
                  >
                    <ButtonSimple>
                      <Icon size="sm" icon={'users'} />
                    </ButtonSimple>
                  </Tooltip>
                </ButtonItem>
                <ButtonItem>
                  <Tooltip
                    placement="bottom"
                    title="New Chat"
                  >
                    <ButtonSimple>
                      <Icon
                        size="sm"
                        icon={'plusCircle'}
                      />
                    </ButtonSimple>
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
        </InnerContainer>
      </Container>
    </SectionArea>
  ),
);

export default SideBar;
