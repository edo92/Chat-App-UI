import React, { memo, useState, createRef } from 'react';
import styled, { css } from 'styled-components';
import helpers from 'helpers';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import Menu from 'Components/Menu';

import { Card } from 'Styled/shared';
import {
  alignDynamic,
  visibleDynamic,
} from 'Styled/dynamic';

const Container = styled.div`
  ${alignDynamic};
  z-index: 12;
  transform: none;
  cursor: pointer;
  transform: none;
  position: relative;
  border-color: transparent;
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

// Dynamic spacing
const spaceing = css`
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

const transform = css`
  transform: ${({ placement }) =>
    ({
      topRight: 'translate3d(12px, -143px, 0px)',
      bottomLeft: 'translate3d(-100px, 20px, 0px)',
    }[placement])};
`;

const Content = styled(ContentStyle)`
  ${spaceing};
  ${transform};
  ${visibleDynamic};
`;

/**
 *
 * @component
 * @param {string}  id                       target id
 * @param {Object} children                  child component
 * @param {String} className                 passed by styled-components or overwritten by user
 * @param {Array} [overlay]                  dropdown menu items array
 * @param {String | undefined} [align]       align item for parent div
 * @param {String | undefined} [placement]   menu component placement
 * @param {String | undefined} [top]         margin top in px
 * @param {String | undefined} [left]        margin left in px
 */

const DropDown = memo(
  ({
    id,
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

    // outside click hook
    useOnClickOutside(ref, (target) => {
      const isOutside = target.includes('outside');
      const isInside = target.includes('inside');

      if (isInside) {
        // Delay dropdown on close, afte click exec.
        isOpen && helpers.promisify(setIsOpen);
        disabled && setDisabled(true);
      }

      if (isOutside) {
        setIsOpen(false);
      }
    });

    return (
      <Container align={align} className={className}>
        <div
          aria-label={className}
          onClick={() => setIsOpen(!isOpen)}
        >
          {children}
        </div>

        <Content
          placement={placement}
          visible={isOpen}
          top={top}
          left={left}
        >
          <MenuContainer ref={ref}>
            <Menu>
              {overlay.map(
                ({ name, toggle, divider }, index) => (
                  <span key={name + index}>
                    <>
                      {name && (
                        <Menu.Item
                          onClick={(cnt) =>
                            toggle(cnt, id)
                          }
                        >
                          <span>{name}</span>
                        </Menu.Item>
                      )}
                    </>
                    {divider && <Menu.Divider />}
                  </span>
                ),
              )}
            </Menu>
          </MenuContainer>
        </Content>
      </Container>
    );
  },
);

export default memo(DropDown);
