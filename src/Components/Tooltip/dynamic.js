import { css } from 'styled-components';

export const displayDynamic = css`
  display: ${({ placement }) =>
    ({
      right: 'flex',
      bottom: 'block',
    }[placement])};
`;

export const placementDynamic = css`
  ${({ placement }) =>
    ({
      right: 'top: calc(100% - 38px)',
      bottom: 'left: -50%',
    }[placement])};
`;

export const transformDynamic = css`
  transform: ${({ placement }) =>
    ({
      right: 'translate3d(6px, 0px, 0px)',
      bottom: 'translate3d(0px, 5.5px, 0px)',
    }[placement])};
`;
