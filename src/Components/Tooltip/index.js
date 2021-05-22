import React, { memo } from 'react';
import styled from 'styled-components';

import helpers from 'helpers';
import { bgDynamic } from 'Styled/dynamic';
import {
  displayDynamic,
  placementDynamic,
  transformDynamic,
} from './dynamic';

const Content = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.div.attrs({
  typebg: 'tertiary',
})`
  ${bgDynamic};
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding: 6px 11.5px;
  border-radius: 5px;
  white-space: nowrap;
`;

const Container = styled.span`
  ${displayDynamic};

  z-index: 11;
  position: relative;

  .tooltip {
    visibility: hidden;
  }

  &: hover .tooltip {
    visibility: visible;
    transition: visibility 0s linear 0.35s;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  color: white;
  ${placementDynamic};
  ${transformDynamic};
`;

/**
 *
 * @component
 * @param {String} title      Tooltip title showes on hover
 * @param {String} placement  Position of title
 * @param {Object} children   Children passed
 */

const Tooltip = memo(
  ({ children, placement, title }) => {
    const toUppercase = helpers.Uppercase;

    return (
      <Container placement={placement}>
        <Content>{children}</Content>

        <div>
          <TitleWrapper placement={placement}>
            <div className="tooltip">
              <Title>{toUppercase(title)}</Title>
            </div>
          </TitleWrapper>
        </div>
      </Container>
    );
  },
);

export default Tooltip;
