import styled from 'styled-components';

import {
  InputBase,
  ListItem,
  CountBase,
  Small,
} from 'Styled/base';

import {
  highlightSecondary,
  activePrimary,
  activeTertiary,
  border,
  fontHighlight,
  fontPrimary,
  fontSecondary,
} from 'Styled/colors';

// Platform
const platform = navigator.platform;
const isWin = platform.includes('Win');

export const Input = styled(InputBase)`
  color: ${fontSecondary};
  border: 1px solid ${border};

  &:focus {
    border: 1px solid ${activePrimary};
    outline-style: none;
    outline-offset: 0px;
  }
`;

export const ListItemHighlight = styled(ListItem)`
  border-bottom: 1px solid ${border};

  background-color: ${({ active }) =>
    active && activeTertiary};

  font-weight: ${({ active }) =>
    active ? '600' : '400'};
`;

export const Scrollbar = styled.div`
  position: relative;
  overflow-y: scroll;

  &:: -webkit-scrollbar {
    display: ${isWin ? 'none' : 'block'};
  }
`;

export const Section = styled.div`
  @media (${({ md }) =>
      md === 'visible' ? 'min' : 'max'}-width: 1200px) {
    display: none;
  }
`;

export const Card = styled.div`
  box-shadow: rgb(0 0 0 / 45%) 0 0 20px -10px;
  background: ${highlightSecondary};
  color: ${fontSecondary};
`;

export const SmallPrimary = styled(Small)`
  color: ${({ active }) =>
    active ? activePrimary : fontPrimary};
`;

export const ActiveColor = styled.span`
  color: ${activePrimary};
`;

export const Circle = styled(CountBase)`
  background-color: ${activePrimary};
`;

export const BorderBox = styled.div`
  border-top: 1px solid ${border};
`;

export const MessageStyle = styled.div`
  background-color: ${({ outgoing }) =>
    outgoing ? activePrimary : fontHighlight};

  color: ${({ outgoing }) =>
    outgoing ? 'white' : fontSecondary};
`;
