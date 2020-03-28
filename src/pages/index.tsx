import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import { Layout } from '@templates/layouts/Default';
import { Image } from '@components/shares/Image';
import { IndexQuery } from '@gql';
import { createPostUrl } from '@domains/valueObjects/PostUrl';
import styles from './index.module.scss';

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allContentfulPost(sort: { order: DESC, fields: published }) {
      nodes {
        id
        title
        published
        post {
          childMarkdownRemark {
            html
            excerpt
          }
        }
        thumbnail {
          description
          fixed {
            width
            height
            src
            srcSetWebp
            srcSet
            aspectRatio
          }
        }
      }
    }
  }
`;

type Props = {
  data: IndexQuery;
};

const Page = ({ data }: Props) => (
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
      <ul>
        {data.allContentfulPost.nodes.map(node => (
          <li key={node.id}>
            <Link to={createPostUrl(node.published)}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Page;
