import React from 'react';
import Link from 'gatsby-link';
import Head from 'react-helmet';
import { ErrorBoundary } from '@components/shares/ErrorBoundary';
import { Heading } from '@components/shares/Heading';
import { toSectionLevel } from '@domains/valueObjects/SectionLevel';

const Header = React.memo(() => {
  const sectionLevel = React.useMemo(() => toSectionLevel(1), []);

  return (
    <header id="header" className="Header" role="banner">
      <Heading level={sectionLevel}>
        <Link to="/">Gatsby</Link>
      </Heading>
    </header>
  );
});

type Props = {
  children: React.ReactNode;
  head?: React.ComponentProps<typeof Head>;
};

export const Layout = React.memo(({ head, children }: Props) => {
  return (
    <ErrorBoundary>
      {head ? <Head {...head} title={head.title} /> : null}
      <Header />
      <main id="main" className="Main" role="main">
        {children}
      </main>
    </ErrorBoundary>
  );
});
