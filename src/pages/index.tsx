import * as React from 'react';
import Link from 'gatsby-link';

import styles from './index.module.scss';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Index = (props: Props) => (
  <div>
    <h1 className={styles.Header}>Hi people</h1>
    <p>
      Welcome to your new <strong>{props?.data?.site?.siteMetadata?.title || ''}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default Index;
