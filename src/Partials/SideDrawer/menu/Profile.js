import React, { memo } from 'react';
import styled from 'styled-components';

import Avatar from 'Components/Avatar';
import Switch from 'Components/Switch';
import Social from 'Components/Social';

import { Small, List, ListItem } from 'Styled/base';

import {
  fontTertiary,
  fontSecondary,
} from 'Styled/colors';

const Container = styled.div`
  position: relative;
  display: block;
`;

const Title = styled.h2`
  color: ${fontSecondary};
  display: flex !important;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1px;
`;

const TP = styled.p`
  color: ${fontSecondary};
  margin: 0;
  font-weight: 600;
`;

const P = styled.p`
  color: ${fontTertiary};
  margin: 0.35rem 0;
  font-size: 15px;
`;

const SocialMedia = styled(List)`
  display: flex;
  position: relative;
`;

const ItemList = styled(ListItem)`
  padding: 0.8rem 0;
`;

const Content = styled.div`
  text-align: start;
  margin-top: 2.5rem;
`;

const SwitchWrapper = styled.div`
  padding-top: 0.5rem;
`;

const SocialIcons = memo(({ profile }) => (
  <SocialMedia>
    {profile.social.map((social) => (
      <ItemList key={social.name}>
        <Social social={social} size="md" />
      </ItemList>
    ))}
  </SocialMedia>
));

const ProfileMenu = memo(({ profile }) => {
  return (
    <Container>
      <span>
        <Avatar size="xl" />
        <Title>{profile.name}</Title>
        <Small>Last seen: Today</Small>
      </span>

      <Content>
        <List>
          <ItemList>
            <span>
              {profile.about && <P>{profile.about}</P>}
            </span>
          </ItemList>
          <ItemList>
            {profile.city && (
              <span>
                <TP>City</TP>
                <P>{profile.city}</P>
              </span>
            )}
          </ItemList>
          <ItemList>
            {profile.website && (
              <span>
                <TP>Website</TP>
                <P>{profile.website}</P>
              </span>
            )}
          </ItemList>
          <ItemList>
            {profile.social && (
              <span>
                <TP>Social Media</TP>
                <SocialIcons profile={profile} />
              </span>
            )}
          </ItemList>
          <ItemList>
            <span>
              <TP>Settings</TP>
              <SwitchWrapper>
                <List>
                  <ItemList>
                    <Switch label="Block" size="sm" />
                  </ItemList>
                  <ItemList>
                    <Switch label="Mute" size="sm" />
                  </ItemList>
                </List>
              </SwitchWrapper>
            </span>
          </ItemList>
        </List>
      </Content>
    </Container>
  );
});

export default ProfileMenu;
