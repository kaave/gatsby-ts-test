import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Link from 'gatsby-link';

import { Layout } from '@templates/layouts/Default';
import { PageTwoQuery } from '@gql';

export const pageQuery = graphql`
  query PageTwo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type Props = PageProps<PageTwoQuery>;

const Page = React.memo(({ data: { site } }: Props) => (
  <Layout head={{ title: site?.siteMetadata?.title ?? '' }}>
    <div>
      <h1>Hi from the second page on {site?.siteMetadata?.title}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
));

export default Page;
