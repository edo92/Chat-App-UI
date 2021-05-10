import React from 'react';
import styled from 'styled-components';

import Link from 'Components/Link';
import Logo from 'Components/Logo';

import { border } from 'Components/Styled/colors';
import { Section } from 'Components/Styled/shared';

import {
  Container as Wrapper,
  InnerContainer,
  List,
  ListItem,
} from 'Components/Styled/base';

import TabPanel from './Tabs';
import { dropmenu, tabsMenu } from './menu';

const SectionArea = styled(Section)`
  border-right: 1px solid ${border};
`;

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

const NavList = styled(List)`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(ListItem)`
  margin: 1.5rem 20px 0;
`;

const Navigation = ({ activeTab, uiHandlers }) => {
  const { toggleNavTab, toggleTheme } = uiHandlers;
  return (
    <SectionArea md="visisble">
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
                selected={activeTab}
                toggle={toggleNavTab}
              />
            </NavList>
          </NavBody>
        </InnerContainer>
      </Container>
    </SectionArea>
  );
};

export default Navigation;
