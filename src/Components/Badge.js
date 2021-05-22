import React, { memo } from 'react';
import styled, { css } from 'styled-components';

import {
  borderDynamic,
  bgDynamic,
} from 'Styled/dynamic';

const badgeSizeDynamic = css`
  width: 8px;
  height: 8px;
  top: 10px;
  right: 10px;
`;

const BadgeComponent = styled.span.attrs(
  ({ type, border }) => ({
    sizebr: 4,
    typebg: type,
    radiusbr: 'circle',
    typebr: 'background',
    stylebr: !border ? 'none' : 'solid',
  }),
)`
  ${bgDynamic};
  ${borderDynamic};
  ${badgeSizeDynamic};
  display: table;
  position: absolute;
`;

/**
 *
 * @component
 * @param {String | undefined}  [size]      sm | md | lg custom sizes
 * @param {Boolean | undefined} [border]    adds border around badge
 * @param {String | undefined}  [status]    success | warning | error
 * @param {String | undefined}  [type]      same as status, may need for consistency
 * @param {String}  className               passed by styled compnent or custom class
 */
const Badge = memo(
  ({ size, border, status, type, className }) => (
    <>
      {type ||
        (status && (
          <BadgeComponent
            size={size}
            border={border}
            className={className}
            type={status || type}
          />
        ))}
    </>
  ),
);

export default Badge;
