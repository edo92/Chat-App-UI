import React, { memo } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icon';
import { fontSecondary } from 'Styled/colors';

const sizes = {
  xs: '30px',
  sm: '35px',
};

const icons = {
  facebook: {
    background: '#3b5998',
    border: '#3b5998',
    fill: true,
  },
  instagram: {
    background: '#3f729b',
    border: '#3f729b',
  },
  twitter: {
    background: '#55acee',
    border: '#55acee',
    fill: true,
  },
  linkedin: {
    background: '#0077b5',
    border: '#0077b5',
    fill: true,
  },
  dribbble: {
    background: '#ea4c89',
    border: '#ea4c89',
  },
};

const SocialBase = styled.span`
  vertical-align: text-top;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  border-radius: 50%;
  margin-right: 0.35rem;
  margin-bottom: 0.35rme;
  padding: 0;
  cursor: pointer;
`;

const SocialWrapper = styled(SocialBase)`
  height: ${({ size }) => sizes[size]};
  width: ${({ size }) => sizes[size]};
  background: ${({ icon }) => icons[icon].background};
  border-color: ${({ icon }) => icons[icon].border};
`;

const SocialIcon = styled(Icon)`
  vertical-align: text-top;
  color: ${fontSecondary};

  fill: ${({ icon }) =>
    icons[icon].fill ? fontSecondary : 'none'};
`;

/**
 *
 * @component
 * @param {Object} social   {name, url} social icons
 * @param {string} size     xs | sm | md | lg sizes
 */

const SocialIconComponent = memo(
  ({ social, size = 'xs' }) => (
    <SocialWrapper size={size} icon={social.name}>
      <SocialIcon size={size} icon={social.name} />
    </SocialWrapper>
  ),
);

export default SocialIconComponent;
