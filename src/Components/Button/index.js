import React, { memo } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icons';
import bttnBaseStyle from './styles';

import {
  bgDynamic,
  fontDynamic,
  spaceDynamic,
  borderDynamic,
  cursorDynamic,
} from 'Styled/dynamic';

const dynamicStyleProps = ({
  type,
  typebr,
  typefont,
  size,
  focusbr,
  hoverbg,
}) => ({
  typefont: typefont,
  sizefont: size,
  typebg: type,
  hoverbg: hoverbg || 'active',
  focusbr: focusbr || 'highlight',
  typebr: typebr || 'primary',
});

// Reusable button styled component
export const ButtonBase = styled.button.attrs(
  dynamicStyleProps,
)`
  ${bttnBaseStyle};
  ${borderDynamic};
  ${cursorDynamic};
  ${spaceDynamic};
  ${fontDynamic};
  ${bgDynamic};
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
    typebr,
    typefont,
    focusbr,
  }) => (
    <ButtonBase
      radiusbr="base"
      size={size}
      type={type}
      //
      onClick={onClick}
      disabled={disabled}
      className={className}
      //
      focusbr={focusbr}
      typebr={typebr}
      typefont={typefont}
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
