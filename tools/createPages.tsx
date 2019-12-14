import path from 'path';
import { GatsbyNode } from 'gatsby';
import { format } from 'date-fns';
import { ContentfulPostConnection, ContentfulPost, SiteSiteMetadata } from '../types/graphql-types';

type Result = {
  site: SiteSiteMetadata;
  allContentfulPost: ContentfulPostConnection;
};

export type PostContext = {
  site: SiteSiteMetadata;
  post: ContentfulPost;
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
      edges {
        node {
          title
          post {
            nodeType
            json
          }
          published
          thumbnail {
            description
            sizes {
              src
              srcSetWebp
              srcSet
              aspectRatio
              sizes
            }
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
    allContentfulPost: { edges },
  } = result.data;
  const postTemplate = path.resolve('./src/templates/post.tsx');

  edges.forEach(({ node: post }) => {
    createPage<PostContext>({
      path: `/posts/${format(new Date(post.published), 'yyyyMMdd')}/`,
      component: postTemplate,
      context: { post, site },
    });
  });
};
