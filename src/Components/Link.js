import React, { memo } from 'react';
import styled from 'styled-components';

const LinkElem = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  hight: 100%;
  width: auto;
`;

/**
 * @component
 * @param {String} to         link to href
 * @param {String} className  className passed by styled-comp. or overwritten
 * @param {Object} children   child component
 */

const Link = ({ to, className, children }) => {
  // regex to test inner or outer link
  const DOMAIN_PATTERN = /^(?:https?:)?[/]{2,}([^/]+)/;
  const isExternal = DOMAIN_PATTERN.test(to);

  return (
    <LinkElem
      className={className}
      href={to}
      target={isExternal ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {children}
    </LinkElem>
  );
};

export default memo(Link);
