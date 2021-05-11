import React, { memo } from 'react';
import styled from 'styled-components';

import { Container } from 'Styled/base';
import { background } from 'Styled/colors';
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
 * @param {Object} children child component
 */
const Page = memo(({ metadata, children }) => {
  return (
    <PageWrapper>
      <Container>
        <Metadata {...metadata} />
        <>{children}</>
      </Container>
    </PageWrapper>
  );
});

export default Page;
