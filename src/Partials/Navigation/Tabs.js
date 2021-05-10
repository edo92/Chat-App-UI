import React, { memo } from 'react';
import styled from 'styled-components';

import { ListItem } from 'Styled/base';

import Icon from 'Components/Icon';
import Tootip from 'Components/Tooltip';
import ButtonSelect from 'Components/Select';
import Badge from 'Components/Badge';

const TabItem = styled(ListItem)`
  margin: 5px 20px;
`;

const TabPanel = ({ tabsMenu, selected, toggle }) => {
  return tabsMenu.map(
    ({ tab, icon, action, status }) => (
      <>
        <TabItem key={tab}>
          <Tootip placement="right" title={tab}>
            <>
              <ButtonSelect
                active={selected === tab}
                onClick={() => toggle({ tab, action })}
              >
                <Icon icon={icon} />
                <Badge status={status} />
              </ButtonSelect>
            </>
          </Tootip>
        </TabItem>
      </>
    ),
  );
};

export default memo(TabPanel);
