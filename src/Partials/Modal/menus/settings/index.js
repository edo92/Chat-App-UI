import React, { memo } from 'react';
import styled from 'styled-components';

import Button from 'Components/Button';
import HzMenu from 'Components/HzMenu';

import {
  SecurityMenu,
  NotificMenu,
  AccountMenu,
} from './submenu';

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

const ButtonSave = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 1rem;
  color: #fff;
`;

/* ** OptionItems can be in form */
// **** */

const Settings = memo(() => (
  <Container>
    <HzMenu
      menus={['Account', 'Notification', 'Security']}
    >
      {(menu) => (
        <>
          <Wrapper>
            <>
              {menu === 'Security' && <SecurityMenu />}
              {menu === 'Account' && <AccountMenu />}
              {menu === 'Notification' && (
                <NotificMenu />
              )}
            </>
          </Wrapper>
          <Wrapper>
            <ButtonSave
              onClick={() => {}}
              type={'primary'}
              title="Save"
            />
          </Wrapper>
        </>
      )}
    </HzMenu>
  </Container>
));

export default Settings;
