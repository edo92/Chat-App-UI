import { css } from 'styled-components';
import {
  waveEffect,
  fadeEffect,
  keyframes_rotate,
  keyframes_slideIn,
  keyframes_slideOut,
} from './keyframes';

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
