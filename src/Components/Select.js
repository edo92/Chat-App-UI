import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { button } from 'Styled/base';
import {
  highlightPrimary,
  highlightSecondary,
} from 'Styled/colors';

import { fontDynamic } from 'Styled/dynamic';

const bgColor = css`
  background-color: ${({ active }) =>
    active && highlightPrimary};
`;
const bgColorHover = css`
  &: hover {
    background-color: ${({ active }) =>
      !active && highlightSecondary};
  }
`;

const ButtonSelect = styled.span`
  ${button};
  ${bgColor};
  ${bgColorHover};
  padding: 0.9rem;
`;

const ButtonContent = styled.span.attrs(
  ({ selected }) => ({
    fontColor: selected ? 'active' : 'inactive',
  }),
)`
  ${fontDynamic};
`;

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
