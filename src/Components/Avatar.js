import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import WomenAvatar5 from 'assets/img/women_avatar5.jpg';

const figureSize = css`
  ${({ size }) =>
    ({
      sm: '1.5rem',
      md: '2.3rem',
      xl: '6.1rem',
    }[size ? size : 'md'])};
`;

const Figure = styled.figure`
  height: ${figureSize};
  width: ${figureSize};
  display: inline-block;
  border-radius: 50%;
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

/**
 * @component
 * @param {String} size  sm | md
 */
const Avatar = memo(({ size }) => (
  <Figure size={size}>
    <Img src={WomenAvatar5} alt="avatar" />
  </Figure>
));

export default memo(Avatar);
