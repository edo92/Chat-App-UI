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
  fontHighlight,
  fontPrimary,
  fontSecondary,
} from 'Styled/colors';

import {
  fontDynamic,
  borderDynamic,
} from 'Styled/dynamic';

// Platform
const platform = navigator.platform;
const isWin = platform.includes('Win');

export const Input = styled(InputBase)`
  ${borderDynamic};
  color: ${fontSecondary};

  &:focus {
    border: 1px solid ${activePrimary};
    outline-style: none;
    outline-offset: 0px;
  }
`;

export const ListItemHighlight = styled(ListItem)`
  ${borderDynamic};

  ${({ active }) => `
    background-color: ${active && activeTertiary};
    font-weight: ${active ? '600' : '400'};
  `}
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
  color: ${fontSecondary};
  background: ${highlightSecondary};
  box-shadow: rgb(0 0 0 / 45%) 0 0 20px -10px;
`;

export const SmallPrimary = styled(Small)`
  color: ${({ active }) =>
    active ? activePrimary : fontPrimary};
`;

export const Circle = styled(CountBase)`
  background-color: ${activePrimary};
`;

export const BorderBox = styled.div`
  ${borderDynamic};
  border-right: none;
  border-left: none;
`;

export const MessageStyle = styled.div`
  background-color: ${({ outgoing }) =>
    outgoing ? activePrimary : fontHighlight};

  color: ${({ outgoing }) =>
    outgoing ? 'white' : fontSecondary};
`;

export const H1 = styled.h1.attrs({
  sizefont: 'h1',
  fontColor: 'secondary',
})`
  ${fontDynamic};
  font-weight: 600;
`;
