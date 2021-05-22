import { css } from 'styled-components';

const pseudoClass = css`
  &: focus {
    box-shadow: rgb(133, 133, 133);
  }
`;

const transitions = css`
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

const baseStyle = css`
  background: transparent;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.23s;
  position: relative;
  outline: none;
  width: auto;
`;

export default css`
  ${baseStyle};
  ${transitions};
  ${pseudoClass};
`;
