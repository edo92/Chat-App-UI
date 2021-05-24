import React, { memo, useState } from 'react';
import styled from 'styled-components';

import Icon from 'Components/Icons';
import Dropdown from 'Components/Dropdown/Dropdown';
import UserFigure from 'Components/UserFigure';

import {
  ListItemHighlight,
  SmallPrimary,
  Circle,
} from 'Styled/shared';

import { fontDynamic } from 'Styled/dynamic';

const ActiveIcon = styled.div`
  ${fontDynamic};
`;

const ListAction = styled.div`
  right: 0;
  width: 50px;
  .count {
    visibility: visible;
  }
`;

const Action = styled.div`
  position: absolute;
  text-align: right;
`;

const Text = styled(SmallPrimary)`
  top: 3px;
  font-size: 14px;
  font-weight: inherit;
`;

const ListViewBase = styled(ListItemHighlight)`
  padding: 19px 30px;
  display: flex;
  cursor: pointer;
  border-width: 0 0 1px;
  line-height: 1.5;
`;

const ListView = styled(ListViewBase)`
  &: hover .dropdown-item {
    display: block;
    visibility: visible;
    transition: visibility 0s linear 0.1s;
  }

  &: hover .count {
    visibility: hidden;
    transition: visibility 0s linear 0.1s;
  }
`;

const DropDown = styled(Dropdown)`
  visibility: hidden;
  text-align: right;
`;

const ChatView = memo(
  ({ data, handleFetch, activeTab, overlay }) => {
    const [active, setactive] = useState({});

    // Select target user
    const handleSelect = (item) => {
      setactive({ ...active, [activeTab]: item });
      handleFetch(item); // Get Content action
    };

    if (!data) return <></>;

    return (
      <>
        {data.map((item, i) => {
          const {
            id,
            date,
            text,
            name,
            avatar,
            status,
            unread_messages,
          } = item;

          return (
            <ListView
              key={i}
              active={active[activeTab]?.id === id}
              onClick={() => handleSelect(item)}
            >
              <>
                {avatar && (
                  <UserFigure
                    name={name}
                    avatar={avatar}
                    active={!!unread_messages}
                    text={<Text>{text}</Text>}
                    status={status}
                  />
                )}
              </>
              <ListAction>
                <>
                  <Action className="count">
                    {unread_messages ? (
                      <Circle>{unread_messages}</Circle>
                    ) : (
                      <></>
                    )}
                    <SmallPrimary
                      active={unread_messages}
                    >
                      {date}
                    </SmallPrimary>
                  </Action>
                </>
                <>
                  <DropDown
                    id={id}
                    overlay={overlay}
                    align="right"
                    placement="bottomLeft"
                    className="dropdown-item"
                  >
                    <ActiveIcon active={true}>
                      <Icon
                        size="lg"
                        icon="MoreHorizontal"
                      />
                    </ActiveIcon>
                  </DropDown>
                </>
              </ListAction>
            </ListView>
          );
        })}
      </>
    );
  },
);

export default ChatView;
