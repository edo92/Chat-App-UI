import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';

/**
 *
 * @component
 * @param {String} description  current page description
 * @param {String} title        page title
 * @param {String} canonicalUrl page pathnamee
 */
const Metadata = memo(
  ({ description, title, canonicalUrl }) => {
    return (
      <Location>
        {({ location }) => {
          const { pathname } = location;
          let canonicalPath = pathname;

          const canonical =
            canonicalUrl ||
            `${site.url}${canonicalPath}`;

          const desc = description || site.description;
          const siteTitle = site.siteTitle;
          const siteUrl = site.url;
          const siteUri = site.uri;

          return (
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              title={title}
              titleTemplate={`%s | ${siteTitle}`}
              link={[
                {
                  rel: 'canonical',
                  key: canonical,
                  href: canonical,
                },
              ]}
              meta={[
                {
                  name: `description`,
                  content: desc,
                },
                {
                  property: `og:title`,
                  content: `${title} | ${siteTitle}`,
                },
                {
                  property: `og:description`,
                  content: desc,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:url`,
                  content: siteUrl,
                },
                {
                  property: `og:site_name`,
                  content: siteUri,
                },
              ]}
            >
              <script type="application/ld+json">
                {`
        {
          "@context": "${site.url}",
          "@type": "${site.type}",
          "url": "${site.url}",
          "email": "${site.emai}",
          "name": "${site.name}",
          "logo": "${site.logo}"
        }
      `}
              </script>
            </Helmet>
          );
        }}
      </Location>
    );
  },
);

const site = {
  name: 'ChatX',
  type: 'application',
  siteTitle: 'Chat X',
  description: `ChatX communication tool`,
  email: 'chatx@gmail.com',
  url: 'http://chatx.com',
  uri: 'chatx.com',
  logo: 'http://chatx.com/og-image.png',
};

Metadata.defaultProps = {
  description: `communication tool`,
  title: `Chat X`,
  canonicalUrl: '/',
  meta: ['chat', 'chat x', 'communication'],
};

Metadata.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string,
  meta: PropTypes.array,
};

export default Metadata;
