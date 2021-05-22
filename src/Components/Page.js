import React, { memo } from 'react';
import styled from 'styled-components';

import Metadata from 'Components/Metadata';
import { Container } from 'Styled/base';
import { bgDynamic } from 'Styled/dynamic';

const PageWrapper = styled.div`
  ${bgDynamic};
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
