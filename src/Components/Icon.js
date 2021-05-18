import React, { memo } from 'react';
import Helpers from 'helpers';
import * as FeatherIcon from 'react-feather';

/**
 *
 * @component
 * @param {String} icon icon name
 * @param {String} [size] size in pixels
 * @param {String} [color] color code
 */

const Icon = memo(({ icon, size, color, fill }) => {
  const uppercase = Helpers.firstChartUppercase;

  const iconSize = {
    sm: {
      height: '16px',
      width: '16px',
    },
    md: {
      height: '19px',
      width: '19px',
    },
    lg: {
      hight: '24px',
      width: '24px',
    },
  };

  const IconComponent = FeatherIcon[uppercase(icon)];
  const sizeIcon = size
    ? iconSize[size]
    : iconSize['md'];

  return (
    <IconComponent
      color={color}
      fill={fill || 'none'}
      style={sizeIcon}
    />
  );
});

export default memo(Icon);
