import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { NotFoundQuery } from '@gql';
import { Layout } from '@templates/layouts/Default';
import { toUrl } from '@domains/valueObjects/Url';

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
        description
        siteUrl
        ogp
      }
    }
  }
`;

type Props = {
  data: NotFoundQuery;
};

const NotFoundPage = React.memo(({ data: { site } }: Props) => (
  <Layout
    meta={{
      title: site?.siteMetadata?.title ?? '',
      description: site?.siteMetadata?.description ?? '',
      image: toUrl(site?.siteMetadata?.ogp ?? ''),
      url: toUrl(site?.siteMetadata?.siteUrl ?? ''),
      noindex: true,
    }}
  >
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
));

export default NotFoundPage;
