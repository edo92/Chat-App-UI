import React, { memo } from 'react';
import styled from 'styled-components';

import {
  colorTypeDynamic,
  borderDynamic,
} from 'Styled/dynamic';

const BadgeBase = styled.span`
  width: 8px;
  height: 8px;
  top: 10px;
  right: 10px;
  position: absolute;
  border-radius: 50%;
`;

const BadgeComponent = styled(BadgeBase).attrs({
  sizebr: 3,
  typebr: 'background',
})`
  background-color: ${colorTypeDynamic};
  ${({ border }) => border && borderDynamic};
`;

/**
 *
 * @component
 * @param {Boolean | undefined} [border]    adds border around badge
 * @param {String | undefined}  [status]    success | warning | error
 * @param {String | undefined}  [type]      same as status, may need for consistency
 * @param {String}  className               passed by styled compnent or custom class
 */
const Badge = memo(
  ({ border, status, type, className }) => (
    <BadgeComponent
      border={border}
      className={className}
      type={status || type}
    />
  ),
);

export default Badge;
