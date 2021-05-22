import React from 'react';
import styled from 'styled-components';

import Link from 'Components/Link';
import Logo from 'Components/Logo';
import Tooltip from 'Components/Tooltip';
import Select from 'Components/Select';
import Icon from 'Components/Icons';
import Dropdown from 'Components/Dropdown/Dropdown';
import Avatar from 'Components/Avatar';

import { Section } from 'Styled/shared';

import {
  Container as Wrapper,
  InnerContainer,
  List,
  ListItem,
} from 'Styled/base';

import TabPanel from './Tabs';
import { dropmenu, tabsMenu } from './menu';

const Container = styled(Wrapper)`
  width: 100px;
  text-align: center;
`;

const NavHeader = styled.div`
  padding: 25px 0;
`;

const NavBody = styled.div`
  margin-top: 0.75rem;
`;

const NavFooter = styled.div`
  margin-top: auto;
  padding-bottom: 1rem;
`;

const NavList = styled(List)`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(ListItem)`
  margin: 1.5rem 20px 0;
`;

const Navigation = ({
  uiState,
  dataState,
  uiHandlers,
  apiHandlers,
}) => {
  const { toggleNavTab, toggleTheme } = uiHandlers;

  return (
    <Section md="visisble">
      <Container>
        <InnerContainer>
          <NavHeader>
            <Link to={'/'}>
              <Logo size="md" />
            </Link>
          </NavHeader>
          <NavBody>
            <NavList>
              <TabPanel
                tabsMenu={tabsMenu}
                toggle={toggleNavTab}
                selected={uiState.navTab}
              />
            </NavList>
          </NavBody>
          <NavFooter>
            <NavList>
              <NavItem>
                <Tooltip
                  placement="right"
                  title="Dark Mode"
                >
                  <Select onClick={toggleTheme}>
                    <Icon icon={'Moon'} />
                  </Select>
                </Tooltip>
              </NavItem>
              <NavItem>
                <Tooltip
                  placement="right"
                  title="User Menu"
                >
                  <Dropdown
                    id={dataState.masterUser.id}
                    placement={'topRight'}
                    overlay={dropmenu(
                      uiHandlers,
                      apiHandlers,
                    )}
                  >
                    <Avatar size="md" />
                  </Dropdown>
                </Tooltip>
              </NavItem>
            </NavList>
          </NavFooter>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Navigation;
