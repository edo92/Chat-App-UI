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
 * @param {Boolean} border     adds border around badge
 * @param {String}  status     success | warning | error
 * @param {String}  className  passed by styled compnent
 */
const Badge = memo(({ border, status, className }) => (
  <BadgeComponent
    className={className}
    border={border}
    status={status}
  />
));

export default Badge;
