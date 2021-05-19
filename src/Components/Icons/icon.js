import React from 'react';
import FeatherIcon from './feather';
import SocialIcon from './social';

const Icon = ({ icon, social, className }) => {
  const IconSVG = (() => {
    return (
      (icon && FeatherIcon(icon)) ||
      (social && SocialIcon(social))
    );
  })();

  return <IconSVG className={className} />;
};

export default Icon;
