export const tabsMenu = [
  {
    tab: 'chat',
    action: 'messages',
    icon: 'MessageCircle',
    status: 'warning',
  },
  {
    tab: 'users',
    action: 'messages',
    icon: 'User',
    status: 'error',
  },
  {
    tab: 'stars',
    icon: 'Star',
  },
  {
    tab: 'archive',
    icon: 'Archive',
  },
];

export const dropmenu = (uiHandlers, apiHandlers) => {
  return [
    {
      name: 'Edit profile',
      toggle: () => console.log(),
    },
    {
      name: 'Profile',
      toggle: (cnt, id) => {
        uiHandlers.toggleDrawer(true, cnt);
        apiHandlers.getUserProfile(id);
      },
    },
    {
      name: 'Settings',
      toggle: (cnt) => {
        uiHandlers.toggleModal(true, cnt);
      },
    },
    { divider: true },
    {
      name: 'Logout',
      toggle: () => console.log(),
    },
  ];
};
