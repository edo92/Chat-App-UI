import React from 'react';
import styled from 'styled-components';

import { Container } from 'Components/Styled/base';
import { background } from 'Components/Styled/colors';
import Metadata from 'Components/Metadata';

const PageWrapper = styled.div`
  background: ${background};
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

/**
 * @component
 * @param {Object} metadata   Metadata for PageMetadata
 * @param {children} children child component
 */
const Page = ({ metadata, children }) => {
  return (
    <PageWrapper>
      <Container>
        <Metadata {...metadata} />
        <>{children}</>
      </Container>
    </PageWrapper>
  );
};

export default Page;
