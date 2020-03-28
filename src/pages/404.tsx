import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { NotFoundQuery } from '@gql';
import { Layout } from '@templates/layouts/Default';

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type Props = {
  data: NotFoundQuery;
};

const NotFoundPage = React.memo(({ data: { site } }: Props) => (
  <Layout head={{ title: site?.siteMetadata?.title ?? '' }}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
));

export default NotFoundPage;
