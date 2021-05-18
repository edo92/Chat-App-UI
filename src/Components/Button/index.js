import React, { memo } from 'react';
import styled, { css } from 'styled-components';

import Icon from 'Components/Icon';

// Dynamic styles
import {
  spaceing,
  fontDynamic,
  borderDynamic,
  cursorDynamic,
} from 'Styled/dynamic';

// Button custom styles
import {
  onFocus,
  onHover,
  baseStyle,
  transitions,
  backgroundColor,
} from './styles';

// Reusable button base style
export const baseButton = css`
  ${spaceing};
  ${baseStyle};
  ${transitions};
  ${fontDynamic};
  ${cursorDynamic};
  ${backgroundColor};
`;

// Reusable button styled component
export const ButtonBase = styled.button.attrs(
  ({ children: { props } }) => ({
    brColor: 'primary',
    fontColor: 'secondary',
    fontSize: props.size,
  }),
)`
  ${baseButton};
  ${borderDynamic};
  ${onHover};
  ${onFocus};
`;

/**
 *
 * @component
 * @param {Boolean}   disabled     true | false
 * @param {Function}  onClick      onClick handler function
 * @param {String}    [icon]       button icon
 * @param {String}    [color]      color code
 * @param {String}    [fill]       fill icon color
 * @param {String}    [size]       sm | md | lg options
 * @param {String}    [title]      button title
 * @param {String}    [type]       primary | success | error | warning ..etc button type/color
 * @param {String}    [className]  className passed for styled components
 */

const Button = memo(
  ({
    disabled,
    onClick,
    icon,
    color,
    fill,
    size,
    title,
    type,
    className,
  }) => (
    <ButtonBase
      radius="base"
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled}
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
        <span style={{ color }}>{title}</span>
      )}
    </ButtonBase>
  ),
);

export default Button;
