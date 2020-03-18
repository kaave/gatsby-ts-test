import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import { Layout } from '~/layouts/default';
import { Image } from '~/components/common/Image';
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
    allContentfulPost {
      edges {
        node {
          id
          title
          published
          thumbnail {
            fixed {
              src
              srcSetWebp
            }
          }
        }
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
      <h2 className={styles.Header}>Hi people</h2>
      <Image file="coke.png" alt="安部コーラ" />
      <p>
        Welcome to your new <strong>{data?.site?.siteMetadata?.title || ''}</strong> site.
        <br />
        url: {data.site?.siteMetadata?.siteUrl || 'unknown'}
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {data.allContentfulPost.edges.map(({ node }) => (
        <>
          {node.id}
          {node.title}
          {node.published}
        </>
      ))}
    </div>
  </Layout>
);

export default Index;
