import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ReactComponent as logo } from 'assets/logo.svg';

const iconSize = css`
  ${({ size = 'sm' }) =>
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
 * 
 * @component
 * @param {String} size  Logo size (sm | md | lg)
 */

const Logo = memo(({ size }) => {
  return <LogoIcon size={size} />;
});

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;
