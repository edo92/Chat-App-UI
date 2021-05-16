import React, { memo, createRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import Icon from 'Components/Icon';
import {
  smooth,
  background,
  activePrimary,
  fontSecondary,
} from 'Styled/colors';

const H3 = styled.h3`
  padding: 0.25rem;
`;

const ModalBase = styled.div`
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ModalComponent = styled(ModalBase)`
  visibility: ${({ active }) =>
    active ? 'visible' : 'hidden'};

  background-color: rgb(0 0 0 / 51%);
  backdrop-filter: blur(2px);
  transition-duration: 0.01s;
  transition-delay: 0.08s;
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  border-radius: 0.6rem;
  width: 35%;
`;

const Header = styled.header`
  background: ${activePrimary};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  justify-content: space-between;
  padding: 0.25rem 1.5rem;
  color: #fff;
  display: flex;
`;

const Body = styled.div`
  background: ${background};
  color: ${fontSecondary};
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 20px;
`;

const Close = styled.span`
  background: ${smooth};

  color: #fff;
  float: right;
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  padding: 0.15rem;
  padding-top: 0.3rem;
  width: 28px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  align-self: center;

  &:hover {
    opacity: 0.75;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Title = ({ icon, title }) => (
  <TitleWrapper>
    {icon && <Icon icon={icon} />}
    <H3>{title}</H3>
  </TitleWrapper>
);

const CloseHandler = ({ toggle }) => (
  <Close onClick={() => toggle(false)}>
    <>&times;</>
  </Close>
);

/**
 *
 * @component
 * @param {Boolean}  active   is modal active
 * @param {String}   title    title in the header
 * @param {String}   icon     icon name
 * @param {Function} toggle   toggle modal
 * @param {Object}   children passed components
 */

const Modal = memo(
  ({ active, title, icon, toggle, children }) => {
    // hook ref on content
    const ref = createRef();

    //  Outside click hook
    useOnClickOutside(ref, (data) => {
      if (!data.includes('inside')) {
        toggle(false);
      }
    });

    return (
      <ModalComponent active={active}>
        <Content ref={ref}>
          <Header>
            <Title icon={icon} title={title} />
            <CloseHandler toggle={toggle} />
          </Header>
          <Body>{children}</Body>
        </Content>
      </ModalComponent>
    );
  },
);

export default Modal;
