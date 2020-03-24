import * as React from 'react';
import { Link } from 'gatsby';

import { PostContext } from '@/tools/createPages';

type Props = {
  pageContext: PostContext;
};

export default ({ pageContext }: Props) => {
  console.log(pageContext);

  return (
    <div>
      <h1>Author name is {pageContext.site.siteMetadata.author}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: pageContext.post.post?.childMarkdownRemark?.html ?? '' }} />
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
