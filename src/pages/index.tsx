import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import { Layout } from '~/layouts/default';
import styles from './index.module.scss';
import { IndexQuery } from '../../types/graphql-types';

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

type Props = {
  data: IndexQuery;
};

const Index = ({ data }: Props) => (
  <Layout>
    <div>
      <h1 className={styles.Header}>Hi people</h1>
      <p>
        Welcome to your new <strong>{data?.site?.siteMetadata?.title || ''}</strong> site.
        <br />
        url: {data.site?.siteMetadata?.siteUrl || 'unknown'}
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
);

export default Index;
