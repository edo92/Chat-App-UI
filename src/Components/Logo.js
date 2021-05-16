import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

const Logo = styled(logo)`
  fill: #0a80ff;
  width: ${iconSize};
  height: ${iconSize};
`;

/**
 * @component
 * @param {String} size  Logo size (sm | md | lg)
 */
const LogoComponent = memo(({ size = 'sm' }) => {
  return <Logo size={size} />;
});

LogoComponent.propTypes = {
  size: PropTypes.string.isRequired,
};

export default LogoComponent;
