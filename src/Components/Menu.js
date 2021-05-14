import React, { memo } from 'react';
import styled from 'styled-components';
import { List } from 'Styled/base';
import { HighlightOnHover } from 'Styled/styles';
import { borderSecondary } from 'Styled/colors';

const MenuItem = styled.div`
  ${HighlightOnHover};
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
 * @component Menu
 * @param {Object} children  menu component wraps menu item
 */
const MenuComponent = memo(({ children }) => {
  return <List>{children}</List>;
});

/**
 * @component Menu
 * @param {Object}    Menu.Item  menu iteme component object
 * @param {Object}    children   content passed as children
 * @param {Function}  onClick    menu item onClick
 */
const ItemMenuComponent = memo(
  ({ children, onClick }) => {
    return (
      <MenuItem
        onClick={() => onClick(children.props.children)}
      >
        <span>{children}</span>
      </MenuItem>
    );
  },
);

MenuComponent.Item = ItemMenuComponent;
MenuComponent.Divider = Divider;
export default MenuComponent;
