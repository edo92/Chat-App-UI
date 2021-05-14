import React, { memo, useState } from 'react';
import styled from 'styled-components';

import { List, ListItem } from 'Styled/base';
import { fontSecondary } from 'Styled/colors';

const MenuItem = styled.div`
  padding: 0.5rem;
  display: flex;
`;

const MenuList = styled(List)`
  display: flex;
  justify-content: center;
`;

const ButtonBase = styled.button`
  color: ${fontSecondary};
  background: transparent;
  border: none;
  font-size: 15px;
`;

const MenuTitle = styled(ButtonBase)`
  border-bottom: ${({ active }) =>
    active ? '2px solid #0a80ff' : 'none'};

  margin-right: 0.5rem;
  padding-bottom: 0.6rem;
  cursor: pointer;
`;

/**
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
