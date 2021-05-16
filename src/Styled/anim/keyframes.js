import { keyframes } from 'styled-components';

export const waveEffect = keyframes`
to {
  box-shadow: 0 0 0 #1890ff;
  box-shadow: 0 0 0 6px #1890ff;
}
`;

export const fadeEffect = keyframes`
to {
  opacity: 0;
}
`;

export const keyframes_slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const keyframes_slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const keyframes_rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;
