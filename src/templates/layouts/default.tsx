import * as React from 'react';
import Link from 'gatsby-link';
import { ErrorBoundary } from '~/templates/ErrorBoundary';

const Header = () => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Gatsby
      </Link>
    </h1>
  </header>
);

type Props = { children: React.ReactNode };
export const Layout = React.memo(({ children }: Props) => (
  <ErrorBoundary>
    <Header />
    <main id="main" className="main" role="main">
      {children}
    </main>
  </ErrorBoundary>
));
