import React, { memo, useState } from 'react';
import styled from 'styled-components';

import { ButtonBase } from 'Components/Button';
import { List, ListItem } from 'Styled/base';

const MenuItem = styled.div`
  padding: 0.5rem;
  display: flex;
`;

const MenuList = styled(List)`
  display: flex;
  justify-content: center;
`;

const MenuTitle = styled(ButtonBase)`
  margin-right: 0.5rem;
  padding-bottom: 0.6rem;
  cursor: pointer;
  border: none;
  border-bottom: ${({ active }) =>
    active ? '2px solid #0a80ff' : 'none'};
`;

/**
 *
 * @component
 * @param {Array}     menus       menu list
 * @param {Function}  children   callback function as child returns active menu
 */

const HorizontalMenu = memo(({ menus, children }) => {
  // Initial menu is first index
  const [menu, setMenu] = useState(menus[0]);

  return (
    <>
      <MenuList>
        {menus.map((name, indx) => (
          <ListItem key={`${name}${indx}`}>
            <MenuItem>
              <MenuTitle
                onClick={() => setMenu(name)}
                active={menu === name}
              >
                <span>{name}</span>
              </MenuTitle>
            </MenuItem>
          </ListItem>
        ))}
      </MenuList>
      {children(menu)}
    </>
  );
});

export default HorizontalMenu;
