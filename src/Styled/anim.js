import { css, keyframes } from 'styled-components';

const waveEffect = keyframes`
to {
  box-shadow: 0 0 0 #1890ff;
  box-shadow: 0 0 0 6px #1890ff;
}
`;

const fadeEffect = keyframes`
to {
  opacity: 0;
}
`;

const keyframes_slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const keyframes_slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const keyframes_rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

// Wave Animation
// ** ** ** ** **

export const waveAnimation = css`
  border-radius: inherit;
  bottom: 0;
  box-shadow: 0 0 0 0 #1890ff;
  box-shadow: 0 0 0 0 #1890ff;
  content: '';
  display: block;
  left: 0;
  opacity: 0.34;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;

  -webkit-animation: ${fadeEffect} 2.5s
      cubic-bezier(0.08, 0.82, 0.17, 1),
    ${waveEffect} 0.7s cubic-bezier(0.08, 0.82, 0.17, 1);

  animation: ${fadeEffect} 2.5s
      cubic-bezier(0.08, 0.82, 0.17, 1),
    ${waveEffect} 0.7s cubic-bezier(0.08, 0.82, 0.17, 1);

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
`;

export const slidein = css`
  animation: ${keyframes_slideIn};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

export const slideout = css`
  animation: ${keyframes_slideOut};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

export const rotate = css`
  animation-name: ${keyframes_rotate};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;
