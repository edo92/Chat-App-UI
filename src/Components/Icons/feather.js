import {
  MessageCircle,
  User,
  Users,
  Star,
  Archive,
  Video,
  Moon,
  Smile,
  Send,
  Paperclip,
  PlusCircle,
  Phone,
  MoreHorizontal,
  HelpCircle,
} from 'react-feather';

const FeatherIcon = (icon) => {
  const allIcons = {
    MessageCircle,
    User,
    Users,
    Phone,
    Star,
    Archive,
    Smile,
    Paperclip,
    Send,
    PlusCircle,
    MoreHorizontal,
    Video,
    Moon,
  };

  if (!allIcons[icon]) {
    console.warn('base icon was not found...');
    return HelpCircle;
  }

  return allIcons[icon];
};

export default FeatherIcon;
