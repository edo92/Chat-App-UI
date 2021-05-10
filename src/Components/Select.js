import React, { memo } from 'react';
import styled from 'styled-components';

import { button } from 'Styled/styles';
import {
  highlightPrimary,
  highlightSecondary,
  fontActive,
  fontInactive,
} from 'Styled/colors';

const SelectButton = styled.span`
  ${button};
  padding: 0.9rem;
`;

const ButtonSelect = styled(SelectButton)`
  background-color: ${(props) =>
    props.active && highlightPrimary};

  color: ${(props) =>
    props.active ? fontActive : fontInactive};

  &: hover {
    background-color: ${(props) =>
      !props.active && highlightSecondary};
  }
`;

/**
 * @component
 * @param {Boolean} active    background color change
 * @param {Function} onClick  onClick prop
 * @param {Object}  children  <Icon passed as children
 */
const Button = memo(({ active, onClick, children }) => (
  <ButtonSelect active={active} onClick={onClick}>
    {children && children}
  </ButtonSelect>
));

export default Button;
