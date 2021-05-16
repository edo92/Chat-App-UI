import React, { memo } from 'react';
import styled from 'styled-components';

import { List, ListItem } from 'Styled/base';
import {
  borderSecondary,
  highlightActive,
} from 'Styled/colors';

const ItemMenu = styled(ListItem)`
  &: hover {
    background-color: ${highlightActive};
  }
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  font-weight: 400;
`;

const Divider = styled.div`
  border-color: ${borderSecondary};
  border-width: 1px;
  border-style: solid;
  margin: 0.4rem 0;
`;

/**
 * @component
 * @param {Object} children  menu component wraps menu item
 */
const Menu = memo(({ children }) => {
  return <List>{children}</List>;
});

/**
 *
 * @component
 * @param {Object}    Menu.Item  menu iteme component object
 * @param {Object}    children   content passed as children
 * @param {Function}  onClick    menu item onClick
 */
const MenuItem = memo(({ children, onClick }) => {
  return (
    <ItemMenu
      onClick={() => onClick(children.props.children)}
    >
      <span>{children}</span>
    </ItemMenu>
  );
});

Menu.Item = MenuItem;
Menu.Divider = Divider;
export default Menu;
