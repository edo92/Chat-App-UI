import styled from 'styled-components';
import { background } from 'Styled/colors';

const Scrollbar = styled.div`
  position: relative;
  overflow-y: scroll;
  
  &:: -webkit-scrollbar {
    display: ${navigator.platform.includes('Win')
      ? 'none'
      : 'block'};
  }
`;

export default Scrollbar;
