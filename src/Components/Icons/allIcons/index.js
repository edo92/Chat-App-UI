import React from 'react';
import { feathers, socials } from './icons';
import helper from 'helpers';

// Icon was not found in icons objs,
// return default icons
const iconNotFound = () => {
  console.warn('Icon was not found...');
  return feathers['HelpCircle'];
};

// Basic Icons
const FeatherIcon = (icon) => {
  const capName = helper.Uppercase(icon);
  const featherIcon = feathers[capName];

  if (!featherIcon) {
    return iconNotFound();
  }
  return featherIcon;
};

// Social Icons
const SocialIcon = (icon) => {
  const socialIcon = socials[icon];
  if (!socialIcon) {
    return iconNotFound();
  }
  return socialIcon;
};

const allIcons = ({ icon, social, className }) => {
  const IconSVG = (() => {
    return (
      (icon && FeatherIcon(icon)) ||
      (social && SocialIcon(social))
    );
  })();

  return <IconSVG className={className} />;
};

export default allIcons;
