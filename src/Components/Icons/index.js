import React, { memo } from 'react';
import styled from 'styled-components';
import IconSVG from './icon';

import { fontColorDynamic } from 'Styled/dynamic';
import {
  iconColorDynamic,
  iconSizeDynamic,
} from './styles';

const Wrapper = styled.span`
  display: flex;
  position: relative;
`;

const MyIcon = styled(IconSVG)`
  ${iconColorDynamic};
  ${iconSizeDynamic};
  ${fontColorDynamic};
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
          icon={icon}
          size={size}
          color={color}
          fill={fill}
          type={type}
          social={social}
          className={className}
        />
      </Wrapper>
    );
  },
);

export default Icon;
