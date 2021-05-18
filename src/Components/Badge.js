import React, { memo } from 'react';
import styled, { css } from 'styled-components';

import { background } from 'Styled/colors';
import { colorType } from 'Styled/dynamic';

const BadgeBase = styled.span`
  position: absolute;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  top: 10px;
  right: 10px;
`;

const borderStyle = css`
    3px solid ${background};
`;

const BadgeComponent = styled(BadgeBase)`
  background-color: ${colorType};
  border: ${({ border }) => border && borderStyle};
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
