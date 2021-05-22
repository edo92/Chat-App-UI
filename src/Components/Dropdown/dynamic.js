import { css } from 'styled-components';

const spaceing = css`
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

const translate = css`
  transform: ${({ placement }) =>
    placement &&
    {
      topRight: 'translate3d(12px, -143px, 0px)',
      bottomLeft: 'translate3d(-100px, 20px, 0px)',
    }[placement]};
`;

export const placement = css`
  ${spaceing};
  ${translate};
`;
