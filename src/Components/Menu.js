import React, { memo } from 'react';
import styled from 'styled-components';
import { List, ListItem } from 'Styled/base';
import {
  bgDynamic,
  cursorDynamic,
  borderDynamic,
} from 'Styled/dynamic';

const ItemMenu = styled(ListItem).attrs({
  hoverbg: 'active',
  typebg: 'none',
})`
  ${bgDynamic};
  ${cursorDynamic};
  font-weight: 400;
  padding: 0.25rem 1.5rem;
`;

const Divider = styled.div.attrs({
  typebr: 'secondary',
})`
  ${borderDynamic};
  border-top: 1px;
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
