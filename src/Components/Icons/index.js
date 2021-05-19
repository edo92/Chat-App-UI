import React, { memo } from 'react';
import styled from 'styled-components';

import IconSVG from './Icon';
import {
  iconSizeDynamic,
  iconColorDynamic,
} from './styles';

const Wrapper = styled.span`
  display: flex;
  position: relative;
`;

const MyIcon = styled(IconSVG)`
  ${iconSizeDynamic};
  ${iconColorDynamic};
`;

/**
 *
 * @component
 * @param {String}  icon     icon name
 * @param {String}  [size]   size in pixels
 * @param {String}  [color]  color code
 * @param {String}  [type]   dynamic colors
 * @param {String}  [fill]   fill icon color code
 */
const Icon = memo(
  ({
    icon,
    social,
    size,
    type,
    color,
    fill,
    className,
  }) => {
    return (
      <Wrapper>
        <MyIcon
          size={size}
          fill={fill}
          type={type}
          color={color}
          icon={icon}
          social={social}
          className={className}
        />
      </Wrapper>
    );
  },
);

export default Icon;
