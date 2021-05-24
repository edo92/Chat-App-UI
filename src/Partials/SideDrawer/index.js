import React, { memo } from 'react';
import styled from 'styled-components';

import Drawer from 'Components/Drawer';
import { bgDynamic } from 'Styled/dynamic';

// Menus
import ProfileMenu from './Menu/Profile';

const Container = styled.div`
  ${bgDynamic};
`;

const Content = styled.div`
  text-align: center;
`;

const Profile = memo(({ drawer, toggle, profile }) => {
  if (!drawer.activeMenu) return <></>;

  const { isOpen, activeMenu } = drawer;

  return (
    <Container>
      <Drawer
        isOpen={isOpen}
        toggle={toggle}
        title={activeMenu}
      >
        <Content>
          <>
            {activeMenu === 'profile' && (
              <ProfileMenu profile={profile} />
            )}
          </>
        </Content>
      </Drawer>
    </Container>
  );
});

export default Profile;
