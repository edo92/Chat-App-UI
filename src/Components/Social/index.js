import React, { memo } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icons';
import { sizeDynamic, socialBgDynamic } from './styles';

const SocialWrapper = styled.span`
  ${sizeDynamic};
  ${socialBgDynamic};
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

const SocialIcon = styled(Icon)`
  vertical-align: text-top;
  color: #fff;
`;

/**
 *
 * @component
 * @param {Object}  social  {name, url} social icons
 * @param {string}  size    xs | sm | md | lg - sizes
 */

const SocialIconComponent = memo(({ social, size }) => (
  <SocialWrapper socialSize={size} icon={social.name}>
    <SocialIcon size={size} social={social.name} />
  </SocialWrapper>
));

export default SocialIconComponent;
