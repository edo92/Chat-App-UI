import styled from 'styled-components';

import { InputBase } from 'Styled/base';
import {
  fontSecondary,
  highlightSecondary,
  activePrimary,
  border,
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
