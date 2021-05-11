import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as logo } from 'assets/logo.svg';

const iconSize = css`
  ${({ size }) =>
    ({
      sm: '25px',
      md: '30px',
      lg: '37px',
    }[size])};
`;

const LogoIcon = styled(logo)`
  fill: #0a80ff;
  width: ${iconSize};
  height: ${iconSize};
`;

/**
 * @component
 * @param {String} size  Logo size (sm | md | lg)
 */
const Logo = memo(({ size = 'sm' }) => {
  return <LogoIcon size={size} />;
});

export default Logo;
