import React, { memo, useState, createRef } from 'react';
import styled from 'styled-components';
import helpers from 'helpers';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { Card } from 'Components/Styled/shared';
import Menu from 'Components/Menu';

const Container = styled.div`
  z-index: 12;
  position: relative;
  border-color: transparent;
  transform: none;
  cursor: pointer;
  transform: none;

  text-align: ${(props) =>
    props.align ? props.align : 'center'};
`;

const ContentStyle = styled(Card)`
  text-align: left;
  position: absolute;
  font-size: 14px;
  top: 0px;
  border-radius: 5px;
  z-index: 1;
`;

const MenuContainer = styled.div`
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  line-height: 1.5;
  min-width: 10rem;
  transform: none;
`;

const Content = styled(ContentStyle)`
  transform: ${(props) =>
    ({
      topRight: 'translate3d(12px, -143px, 0px)',
      bottomLeft: 'translate3d(-100px, 20px, 0px)',
    }[props.placement])};

  visibility: ${(props) =>
    props.isOpen ? 'visible' : 'hidden'};

  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

/**
 *
 * @component
 * @param {Object} children                  child component
 * @param {String} className                 passed by styled-components or overwritten by user
 * @param {Array} [overlay]                  dropdown menu items array
 * @param {String | undefined} [align]       align item for parent div
 * @param {String | undefined} [placement]   menu component placement
 * @param {String | undefined} [top]         margin top in px
 * @param {String | undefined} [left]        margin left in px
 */

const DropDown = ({
  children,
  className,
  align,
  placement,
  top,
  left,
  overlay,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const ref = createRef();

  // hooks
  useOnClickOutside(ref, (data) => {
    if (disabled && data.includes('outside')) {
      // promisify delay, solves outside click issue
      helpers.promisify(setIsOpen);
    }

    if (data.includes('inside')) {
      !isOpen && setIsOpen(false);
      isOpen && setDisabled(true);
    }
  });

  // dropdown open/close state
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container align={align} className={className}>
      <div
        ref={ref}
        aria-label={className}
        onClick={toggle}
      >
        {children}
      </div>

      <Content
        placement={placement}
        isOpen={isOpen}
        top={top}
        left={left}
      >
        <MenuContainer>
          <Menu>
            {overlay.map(
              ({ name, toggle, divider }, index) => (
                <span key={name + index}>
                  {name && (
                    <Menu.Item
                      onClick={(cnt) => toggle(cnt)}
                    >
                      <span>{name}</span>
                    </Menu.Item>
                  )}
                  {divider && <Menu.Divider />}
                </span>
              ),
            )}
          </Menu>
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default memo(DropDown);
