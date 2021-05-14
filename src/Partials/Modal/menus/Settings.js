import React, { memo } from 'react';
import styled from 'styled-components';
import { List, ListItem } from 'Styled/base';

import Switch from 'Components/Switch';
import Button from 'Components/Button';
import HzMenu from 'Components/HzMenu';

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

const OptionItem = styled(ListItem)`
  text-align: start;
  padding: 0.6rem 1rem;
`;

const ButtonSave = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 1rem;
  color: #fff;
`;

const AccountMenu = memo(() => (
  <List>
    <OptionItem>
      <Switch label="Allow contacts" size="sm" />
    </OptionItem>

    <OptionItem>
      <Switch label="Private Profile" size="sm" />
    </OptionItem>

    <OptionItem>
      <Switch label="Two-step verification" size="sm" />
    </OptionItem>

    <OptionItem>
      <Switch label="Developer mode" size="sm" />
    </OptionItem>
  </List>
));

const NotificMenu = memo(() => (
  <List>
    <OptionItem>
      <Switch
        label="Allow mobile notifications"
        size="sm"
      />
    </OptionItem>

    <OptionItem>
      <Switch
        label="Notifications from your friends"
        size="sm"
      />
    </OptionItem>

    <OptionItem>
      <Switch
        label="Send notifications by email"
        size="sm"
      />
    </OptionItem>
  </List>
));

const SecurityMenu = memo(() => (
  <List>
    <OptionItem>
      <Switch label="Two way authentication" size="sm" />
    </OptionItem>
  </List>
));

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
            {menu === 'Account' && <AccountMenu />}
            {menu === 'Notification' && <NotificMenu />}
            {menu === 'Security' && <SecurityMenu />}
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
