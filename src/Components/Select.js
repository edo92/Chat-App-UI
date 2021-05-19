import React, { memo } from 'react';
import styled from 'styled-components';
import { button } from 'Styled/base';
import { fontDynamic, bgDynamic } from 'Styled/dynamic';

const selectBase = styled.span`
  ${button};
  ${bgDynamic};
  padding: 0.9rem;
`;

const contentBase = styled.span`
  ${fontDynamic};
`;

const ButtonSelect = styled(selectBase).attrs(
  ({ active }) => ({
    activebg: active,
    hover: !active && 'secondary',
  }),
)``;

const ButtonContent = styled(contentBase).attrs(
  ({ selected }) => ({
    fontColor: selected ? 'active' : 'inactive',
  }),
)``;

/**
 *
 * @component
 * @param {Boolean} active    background color change
 * @param {Function} onClick  onClick prop
 * @param {Object}  children  <Icon passed as children
 */

const Select = memo(({ active, onClick, children }) => {
  return (
    <ButtonSelect active={active} onClick={onClick}>
      <ButtonContent selected={active}>
        {children && children}
      </ButtonContent>
    </ButtonSelect>
  );
});

export default Select;
