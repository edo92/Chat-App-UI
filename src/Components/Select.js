import React, { memo } from 'react';
import styled from 'styled-components';

import {
  activePrimary,
  highlightSecondary,
  fontActive,
  fontInactive,
} from 'Components/Styled/colors';

const BtnSelect = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  transition: all 0.23s;
  padding: 0.9rem;
  position: relative;
  cursor: pointer;
`;

const ButtonSelect = styled(BtnSelect)`
  background-color: ${(props) =>
    props.active && activePrimary};

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
