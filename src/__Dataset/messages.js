// Avatars
import ManAvatar1 from '../assets/img/man_avatar1.jpg';
// import ManAvatar2 from '../assets/img/man_avatar2.jpg';
// import ManAvatar3 from '../assets/img/man_avatar3.jpg';
// import ManAvatar4 from '../assets/img/man_avatar4.jpg';
// import WomenAvatar1 from '../assets/img/women_avatar1.jpg';
// import WomenAvatar2 from '../assets/img/women_avatar2.jpg';
import WomenAvatar5 from '../assets/img/women_avatar5.jpg';
import Image1 from '../assets/img/image1.jpg';

export const conversation = {
  1: [
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text: 'Hello how are you?',
      date: '01:20 PM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      text: "I'm fine, how are you",
      date: '01:35 PM',
    },
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text:
        "I'm fine thank you. I expect you to send me some files.",
      date: '05:31 PM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      text:
        "What files are you talking about? I'm sorry I can't remember right now.",
      date: '10:12 PM',
    },
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text:
        'I want those files for you. I want you to send 1 PDF and 1 image file.\n',
      date: '11:56 PM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      media: { name: 'important document.pdf' },
      date: '11:59 PM',
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      text: "I'm about to send the other file now.",
      date: '07:15 AM',
    },
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text:
        "Thank you so much. These files are very important to me. I guess you didn't make any changes to these files. So I need the original versions of these files. Thank you very much again.",
      date: '07:45 AM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      text: 'I thank you. We are glad to help you.',
      date: '08:00 AM',
    },
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text: '😃 😃 ❤ ❤',
      date: '09:23 AM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      media: { image: Image1 },
      date: '10:43 PM',
    },
  ],
  2: [
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text:
        "Thank you so much. These files are very important to me. I guess you didn't make any changes to these files. So I need the original versions of these files. Thank you very much again.",
      date: '07:45 AM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      text: 'I thank you. We are glad to help you.',
      date: '08:00 AM',
    },
    {
      name: 'Mirabelle Tow',
      avatar: { image: WomenAvatar5 },
      text: '😃 😃 ❤ ❤',
      date: '09:23 AM',
      outgoing: true,
    },
    {
      name: 'Townsend Seary',
      avatar: { image: ManAvatar1 },
      media: { image: Image1 },
      date: '10:43 PM',
    },
  ],
};
