/*
  eslint-disable

  jsx-a11y/html-has-lang,
  react/jsx-props-no-spreading,
  react/destructuring-assignment,
  react/no-danger
 */
import React from 'react';
import { HelmetHTMLBodyDatum, HelmetHTMLElementDatum } from 'react-helmet';

type Props = {
  bodyAttributes: HelmetHTMLBodyDatum;
  htmlAttributes: HelmetHTMLElementDatum;
  headComponents?: React.ReactNode;
  preBodyComponents?: React.ReactNode;
  postBodyComponents?: React.ReactNode;
  body: string;
};

export default function HTML(props: Props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width" />
        <script
          src={`https://polyfill.io/v3/polyfill.min.js?features=${[
            'default',
            'es2015',
            'es2016',
            'es2017',
            'IntersectionObserver',
          ].join('%2C')}&flags=gated`}
          defer
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
