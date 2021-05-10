import styled from 'styled-components';
import {
  fontSecondary,
  highlightSecondary,
} from 'Components/Styled/colors';

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
