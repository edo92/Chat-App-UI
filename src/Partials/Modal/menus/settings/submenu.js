import React, { memo } from 'react';
import styled from 'styled-components';

import { List, ListItem } from 'Styled/base';
import Switch from 'Components/Switch';

const OptionItem = styled(ListItem)`
  text-align: start;
  padding: 0.6rem 1rem;
`;

/* ** OptionItems can be in form */
// **** */

export const AccountMenu = memo(() => (
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

export const NotificMenu = memo(() => (
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

export const SecurityMenu = memo(() => (
  <List>
    <OptionItem>
      <Switch label="Two way authentication" size="sm" />
    </OptionItem>
  </List>
));
