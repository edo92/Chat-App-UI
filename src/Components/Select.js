import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { button } from 'Styled/base';
import {
  highlightPrimary,
  highlightSecondary,
  fontActive,
  fontInactive,
} from 'Styled/colors';

const color = css`
  color: ${({ active }) =>
    active ? fontActive : fontInactive};
`;
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
  ${color};
  ${button};
  ${bgColor};
  ${bgColorHover};
  padding: 0.9rem;
`;

/**
 *
 * @component
 * @param {Boolean} active    background color change
 * @param {Function} onClick  onClick prop
 * @param {Object}  children  <Icon passed as children
 */

const Button = memo((props) => (
  <ButtonSelect {...props}>
    {props.children && props.children}
  </ButtonSelect>
));

export default Button;
