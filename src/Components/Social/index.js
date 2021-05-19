import React, { memo } from 'react';
import styled from 'styled-components';

import IconSvg from 'Components/Icons';
import { sizeDynamic, socialBgDynamic } from './styles';

const socialBase = styled.span`
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

const Icon = styled(IconSvg)`
  vertical-align: text-top;
  color: #fff;
`;

const Social = styled(socialBase)`
  ${sizeDynamic};
  ${socialBgDynamic};
`;

/**
 *
 * @component
 * @param {Object}  social  {name, url} social icons
 * @param {string}  size    xs | sm | md | lg - sizes
 */

const SocialIcon = memo(({ social, size }) => (
  <Social socialSize={size} icon={social.name}>
    <Icon size={size} social={social.name} />
  </Social>
));

export default SocialIcon;
