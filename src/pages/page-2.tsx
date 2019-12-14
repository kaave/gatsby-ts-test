import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import { Layout } from '~/layouts/default';
import { PageTwoQuery } from '../../types/graphql-types';

export const pageQuery = graphql`
  query PageTwo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type Props = {
  data: PageTwoQuery;
};

const SecondPage = ({ data }: Props) => (
  <Layout>
    <div>
      <h1>Hi from the second page on {data.site?.siteMetadata?.title}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default SecondPage;
