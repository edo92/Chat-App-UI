import React, { memo } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icon';
import { ColorType } from 'Styled/styles';
import {
  border,
  fontSecondary,
  activeSecondary,
} from 'Styled/colors';

const BaseButton = styled.button`
  display: inline-flex;
  padding: 9px 14px;
  background: transparent;
  border-radius: 0.25rem;
  border-width: 1px;
  font-size: 14px;
  width: auto;
  line-height: 14px;
  cursor: pointer;
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

export const ButtonBase = styled(BaseButton)`
  border: 1px solid ${border};
  color: ${fontSecondary};

  &: focus {
    border-width: 1px;
    box-shadow: rgb(133, 133, 133);
    border-color: ${activeSecondary};
  }

  &: hover {
    background-color: ${border};
  }
`;

const ButtonComponent = styled(ButtonBase)`
  background: ${ColorType};

  border-radius: 0.25rem;
  border-width: 1px;

  font-size: 14px;
  width: auto;
  display: inline-flex;
  justify-content: center;
  line-height: 14px;
  outline: none;

  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &: focus {
    border-width: 1px;
    border-color: rgb(133, 133, 133);
    box-shadow: rgb(133, 133, 133);
  }
`;

/**
 *
 * @component Button
 * @param {Function} onClick      onClick handler function
 * @param {String}   [icon]       button icon
 * @param {String}   [color]      color code
 * @param {String}   [fill]       fill icon color
 * @param {String}   [size]       sm | md | lg options
 * @param {String}   [title]      button title
 * @param {String}   [type]       button type/color primary | success | error | warning ..etc
 * @param {String}   [className]  className passed for styled components
 */

const Button = memo(
  ({
    onClick,
    icon,
    color,
    fill,
    size,
    title,
    type,
    className,
  }) => (
    <ButtonComponent
      type={type}
      onClick={onClick}
      className={className}
    >
      {icon ? (
        <Icon
          icon={icon}
          size={size}
          fill={fill}
          color={color}
        />
      ) : (
        <span>{title}</span>
      )}
    </ButtonComponent>
  ),
);

export default Button;
