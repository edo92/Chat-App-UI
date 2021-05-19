import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UnselectedChat from 'assets/img/unselected-chat.svg';
import { fontDynamic } from 'Styled/dynamic';

const Text = styled.p`
  ${fontDynamic};
`;

const Image = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1.7rem;
`;

const UnselectedContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Unselected = styled.div`
  top: 37%;
  position: relative;
  text-align: center;
`;

// Svg icons options
const svgIcons = {
  unselected: UnselectedChat,
};

/**
 * @component
 * @param {String} [svg]       static svg file
 * @param {String} [image]     image file or url
 * @param {String} [title]     title commands action
 * @param {Object} [children]  element passed as child
 */
const Empty = memo(
  ({ svg = 'unselected', image, title, children }) => {
    const svgImage = image || svgIcons[svg];

    return (
      <UnselectedContainer>
        <Unselected>
          <Image
            width={200}
            src={svgImage}
            alt="unselected"
          />
          <>
            {title && (
              <Text fontColor="secondary">{title}</Text>
            )}
            {children && children}
          </>
        </Unselected>
      </UnselectedContainer>
    );
  },
);

Empty.propTypes = {
  svg: PropTypes.string.isRequired,
};

export default Empty;
