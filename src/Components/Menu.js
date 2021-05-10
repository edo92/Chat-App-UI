import React from 'react';
import styled from 'styled-components';
import { List } from 'Components/Styled/base';
import { HighlightOnHover } from 'Components/Styled/styles';
import { borderSecondary } from 'Components/Styled/colors';

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

const MenuComponent = ({ children }) => {
  return <List>{children}</List>;
};

/**
 *
 * @param {Object}   children
 * @param {Function} onClick
 */
const ItemMenuComponent = ({ children, onClick }) => {
  return (
    <MenuItem
      onClick={() => onClick(children.props.children)}
    >
      <span>{children}</span>
    </MenuItem>
  );
};

MenuComponent.Item = ItemMenuComponent;
MenuComponent.Divider = Divider;
export default MenuComponent;
