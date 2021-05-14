export const dropmenu = (uiHandlers, apiHandlers) => {
  return [
    {
      name: 'Profile',
      toggle: (cnt, id) => {
        uiHandlers.toggleDrawer(true, cnt);
        apiHandlers.getUserProfile(id);
      },
    },
    {
      name: 'Delete',
      toggle: () => console.log(),
    },
  ];
};
