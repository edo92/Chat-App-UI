import React, { memo } from 'react';
import styled from 'styled-components';
import Icon from 'Components/Icon';

import { ColorType } from 'Styled/styles';
import {
  border,
  fontSecondary,
  activeSecondary,
} from 'Styled/colors';

export const BtnSimple = styled.button`
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

export const ButtonSimple = styled(BtnSimple)`
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

export const Button = styled(ButtonSimple)`
  background: ${ColorType};

  border-radius: 0.25rem;
  border-width: 1px;

  font-size: 14px;
  width: auto;
  display: inline-flex;
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
 * @component
 * @param {Function} onClick  onClick handler function
 * @param {String} icon       button icon
 * @param {String} [color]    color code
 * @param {String} [size]     sm | md | lg options
 * @param {String} [title]    button title
 * @param {String} [type]     button type/color primary | success | error | warning ..etc
 */

const ButtonComponent = memo(
  ({
    onClick,
    className,
    icon,
    color,
    fill,
    size,
    title,
    type,
  }) => (
    <Button
      type={type}
      className={className}
      onClick={onClick}
    >
      {icon ? (
        <Icon
          icon={icon}
          color={color}
          size={size}
          fill={fill}
        />
      ) : (
        <span>{title}</span>
      )}
    </Button>
  ),
);

export default memo(ButtonComponent);
