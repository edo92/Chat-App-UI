import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import {
  background,
  statuses,
} from 'Components/Styled/colors'

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

const Badge = styled(BadgeBase)`
  background-color: ${statuses};
  border: ${(props) => props.border && borderStyle};
`;

const BadgeComponent = memo(
  ({ border, status, className }) => (
    <Badge
      className={className}
      border={border}
      status={status}
    />
  ),
);

export default BadgeComponent;
