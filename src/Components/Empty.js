import React, { memo } from 'react';
import styled from 'styled-components';
import { TextSecondary } from 'Styled/styles';
import UnselectedChat from 'assets/img/unselected-chat.svg';

const Text = styled.p`
  ${TextSecondary};
  font-size: 16px;
  font-weight: 300;
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
const EmptyComponent = memo(
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
            {title && <Text>{title}</Text>}
            {children && children}
          </>
        </Unselected>
      </UnselectedContainer>
    );
  },
);

export default EmptyComponent;
