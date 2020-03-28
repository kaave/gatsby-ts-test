import * as React from 'react';
import { Link } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

import { createPostPath } from '@domains/valueObjects/PostPath';
import { PostContext } from '@/tools/createPages';
import { Layout } from '../layouts/Default';

type Props = {
  pageContext: PostContext;
};

const Post = React.memo(({ pageContext: { site, post: { title, post, published, thumbnail }, prev, next } }: Props) => (
  <Layout head={{ title: `${title ? `${title} | ` : ''}${site.siteMetadata.title}` }}>
    <article className="Article" id="article">
      {thumbnail?.fixed ? <Img fixed={thumbnail.fixed as FixedObject} alt="" /> : null}
      <h2 className="Article__header">
        <span className="Article__title">{title}</span>
        <time className="Article__published" dateTime={published}>
          {published}
        </time>
      </h2>
      {/* eslint-disable-next-line react/no-danger */}
      <div className="Content" dangerouslySetInnerHTML={{ __html: post?.childMarkdownRemark?.html ?? '' }} />
      <nav className="Article__nav">
        <ul>
          {prev ? (
            <li>
              <Link to={createPostPath(prev.published)}>Go to {prev.title}</Link>
            </li>
          ) : null}
          {next ? (
            <li>
              <Link to={createPostPath(next.published)}>Go to {next.title}</Link>
            </li>
          ) : null}
          <li>
            <Link to="/authors/">Back to authors</Link>
          </li>
          <li>
            <Link to="/">Back to top</Link>
          </li>
        </ul>
      </nav>
    </article>
  </Layout>
));

export default Post;
