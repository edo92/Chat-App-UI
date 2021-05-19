import React from 'react';
import FeatherIcon from './feather';
import SocialIcon from './social';

const IconSVG = ({ icon, social, size, className }) => {
  let Component;

  if (icon) {
    Component = FeatherIcon(icon);
  } else if (social) {
    Component = SocialIcon(social);
  }

  return <Component size={size} className={className} />;
};

export default IconSVG;
