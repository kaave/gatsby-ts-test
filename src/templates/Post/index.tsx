import * as React from 'react';
import { Link } from 'gatsby';

import { PostContext } from '@/tools/createPages';
import Img, { FixedObject } from 'gatsby-image';

type Props = {
  pageContext: PostContext;
};

export default ({ pageContext }: Props) => {
  // eslint-disable-next-line no-underscore-dangle
  const __html = pageContext.post.post?.childMarkdownRemark?.html ?? '';
  const { title, published, thumbnail } = pageContext.post;

  return (
    <div>
      {thumbnail?.fixed ? <Img fixed={thumbnail.fixed as FixedObject} alt="" /> : null}
      <h2>
        {title} {published}
      </h2>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html }} />
      <ul>
        <li>
          <Link to="/authors/">Back to authors</Link>
        </li>
        <li>
          <Link to="/">Back to top</Link>
        </li>
      </ul>
    </div>
  );
};
