import * as React from 'react';
import { Link } from 'gatsby';

import { PostContext } from '../../tools/createPages';

type Props = {
  pageContext: PostContext;
};

export default ({ pageContext }: Props) => (
  <div>
    <h1>Author name is {pageContext.site.author}</h1>
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
