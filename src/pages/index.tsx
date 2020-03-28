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
      posts: nodes {
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

const Page = React.memo(({ data: { allContentfulPost, site } }: Props) => (
  <Layout head={{ title: site?.siteMetadata?.title ?? '' }}>
    <div>
      <h2 className={styles.Header}>Hi people</h2>
      <Image file="coke.png" alt="安部コーラ" />
      <p>
        Welcome to your new <strong>{site?.siteMetadata?.title || ''}</strong> site.
        <br />
        url: {site?.siteMetadata?.siteUrl || 'unknown'}
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <ul>
        {allContentfulPost.posts.map(post => (
          <li key={post.id}>
            <Link to={createPostUrl(post.published)}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
));

export default Page;
