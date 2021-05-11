import styled from 'styled-components';

import {
  InputBase,
  ListItem,
  CountBase,
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

export const Input = styled(InputBase)`
  color: ${fontSecondary};
  border: 1px solid ${border};

  &:focus {
    outline-style: none;
    outline-offset: 0px;
    border: 1px solid ${activePrimary};
  }
`;

export const ListItemHighlight = styled(ListItem)`
  border-bottom: 1px solid ${border};

  background-color: ${({ active }) =>
    active && activeTertiary};

  font-weight: ${({ active }) =>
    active ? '600' : '400'};
`;

export const Small = styled.small`
  font-size: 11px;
  font-weight: 400;
  position: relative;
`;

export const SmallPrimary = styled(Small)`
  color: ${(props) =>
    props.active ? activePrimary : fontPrimary};
`;

export const ActiveColor = styled.span`
  color: ${activePrimary};
`;

export const Count = styled(CountBase)`
  background-color: ${activePrimary};
`;

export const BorderBox = styled.div`
  border-bottom: 1px solid ${border};
`;

export const MessageStyle = styled.div`
  background-color: ${(props) =>
    props.outgoing ? activePrimary : fontHighlight};
  color: ${(props) =>
    props.outgoing ? 'white' : fontSecondary};
`;
