import React, { memo } from 'react';
import styled from 'styled-components';

import Button from 'Components/Button';
import HzMenu from 'Components/HzMenu';

import {
  SecurityMenu,
  NotificMenu,
  AccountMenu,
} from './submenu';

const ButtonSave = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 1rem;
  color: #fff;
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  min-height: 270px;
  padding: 0.5rem 0;
`;

const Wrapper = styled.div`
  padding-top: 1.5rem;
`;

const Settings = memo(() => {
  // Horizontal menu items
  const menulist = [
    'Account',
    'Notification',
    'Security',
  ];

  const DynamicMenu = ({ menu }) => (
    <>
      {menu === 'Security' && <SecurityMenu />}
      {menu === 'Account' && <AccountMenu />}
      {menu === 'Notification' && <NotificMenu />}
    </>
  );

  const ButtonSubmit = () => (
    <ButtonSave
      title="Save"
      type={'primary'}
      onClick={() => {}}
    />
  );

  return (
    <Container>
      <HzMenu menus={menulist}>
        {(menu) => (
          <Wrapper>
            <DynamicMenu menu={menu} />
            <ButtonSubmit />
          </Wrapper>
        )}
      </HzMenu>
    </Container>
  );
});

export default Settings;
