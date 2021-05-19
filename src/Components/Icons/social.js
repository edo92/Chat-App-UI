import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from 'react-icons/ti';

import {
  AiOutlineInstagram,
  AiOutlineDribbble,
} from 'react-icons/ai';

const SocialIcon = (social) => {
  const allIcons = {
    facebook: TiSocialFacebook,
    instagram: AiOutlineInstagram,
    twitter: TiSocialTwitter,
    linkedin: TiSocialLinkedin,
    dribbble: AiOutlineDribbble,
  };

  if (!allIcons[social]) {
    console.warn('social icon was not found...');
    return TiSocialFacebook;
  }

  return allIcons[social];
};

export default SocialIcon;
