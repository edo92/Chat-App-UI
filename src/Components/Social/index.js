import React, { memo } from 'react';
import styled from 'styled-components';

import IconSvg from 'Components/Icons';
import { cursorDynamic } from 'Styled/dynamic';
import { sizeDynamic, socialBgDynamic } from './dynamic';

const socialBase = styled.span`
  vertical-align: text-top;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  border-radius: 50%;
  margin-right: 0.35rem;
  margin-bottom: 0.35rme;
  padding: 0;
`;

const Icon = styled(IconSvg)`
  color: #fff;
  vertical-align: text-top;
`;

const Social = styled(socialBase)`
  ${sizeDynamic};
  ${cursorDynamic};
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
