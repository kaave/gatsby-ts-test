import React from 'react';
import Link from 'gatsby-link';
import Head from 'react-helmet';
import { ErrorBoundary } from '@components/shares/ErrorBoundary';
import { Heading } from '@components/shares/Heading';
import { toSectionLevel } from '@domains/valueObjects/SectionLevel';
import { toHelmetMetaProps } from '@domains/services/MetaTagsServices';
import { MetaInfo } from '@domains/valueObjects/MetaInfo';

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
  meta: MetaInfo;
  children: React.ReactNode;
};

export const Layout = ({ meta, children }: Props) => (
  <ErrorBoundary>
    {meta ? <Head title={meta.title} htmlAttributes={{ lang: 'ja' }} meta={toHelmetMetaProps(meta)} /> : null}
    <Header />
    <main id="main" className="Main" role="main">
      {children}
    </main>
  </ErrorBoundary>
);
