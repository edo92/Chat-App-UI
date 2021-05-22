import React, { memo } from 'react';
import styled from 'styled-components';
import { button } from 'Styled/base';
import { bgDynamic, fontDynamic } from 'Styled/dynamic';

const ButtonSelect = styled.span.attrs(
  ({ selected }) => ({
    typebg: selected && 'primary',
    hoverbg: !selected && 'secondary',
    hoverfont: !selected && 'active',
    typefont: selected ? 'active' : 'inactive',
  }),
)`
  ${button};
  ${bgDynamic};
  ${fontDynamic};
  padding: 0.9rem;
`;

/**
 *
 * @component
 * @param {Function} onClick  onClick prop
 * @param {Boolean} active    active/inactive status
 * @param {Object}  children  <Icon passed as children
 */

const Select = memo(({ active, onClick, children }) => (
  <ButtonSelect selected={active} onClick={onClick}>
    {children && children}
  </ButtonSelect>
));

export default Select;
