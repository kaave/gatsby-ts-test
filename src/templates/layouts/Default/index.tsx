import React from 'react';
import Link from 'gatsby-link';
import { ErrorBoundary } from '@components/shares/ErrorBoundary';
import { Heading } from '@components/shares/Heading';
import { toSectionLevel } from '@domains/valueObjects/SectionLevel';

const Header = React.memo(() => {
  const sectionLevel = React.useMemo(() => toSectionLevel(1), []);

  return (
    <header>
      <Heading level={sectionLevel}>
        <Link to="/">Gatsby</Link>
      </Heading>
    </header>
  );
});

type Props = { children: React.ReactNode };

export const Layout = React.memo(({ children }: Props) => (
  <ErrorBoundary>
    <Header />
    <main id="main" className="Main" role="main">
      {children}
    </main>
  </ErrorBoundary>
));
