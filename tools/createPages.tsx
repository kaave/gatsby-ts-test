import path from 'path';
import { GatsbyNode } from 'gatsby';
import { ContentfulPostConnection, ContentfulPost, SiteSiteMetadata } from '@gql';

// @TODO gatsby-node.jsのexports.onCreateWebpackConfig が効いてない
// import { createPostPath } from '@domains/valueObjects/PostPath';
import { createPostPath } from '../src/domains/valueObjects/PostPath';

type Site = {
  siteMetadata: SiteSiteMetadata;
};

type Result = {
  site: Site;
  allContentfulPost: ContentfulPostConnection;
};

export type PostContext = {
  site: Site;
  post: ContentfulPost;
  prev?: ContentfulPost;
  next?: ContentfulPost;
};

const query = `
  {
    site {
      siteMetadata {
        title
        siteUrl
        author
        twitter
        github
      }
    }
    allContentfulPost {
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

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql<Result>(query);
  if (result.errors || !result.data) throw result.errors;

  const {
    site,
    allContentfulPost: { nodes },
  } = result.data;
  const postTemplate = path.join(__dirname, '..', 'src', 'templates', 'Post', 'index.tsx');

  nodes.forEach((post, i) => {
    createPage<PostContext>({
      path: path.join(...createPostPath(post.published).split('/')),
      component: postTemplate,
      context: {
        site,
        post,
        prev: nodes[i - 1],
        next: nodes[i + 1],
      },
    });
  });
};
