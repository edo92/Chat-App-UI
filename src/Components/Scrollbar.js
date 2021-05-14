import styled from 'styled-components';

const platform = navigator.platform.includes('Win');

const Scrollbar = styled.div`
  position: relative;
  overflow-y: scroll;
  
  &:: -webkit-scrollbar {
    display: ${platform}
      ? 'none'
      : 'block'};
  }
`;

export default Scrollbar;
