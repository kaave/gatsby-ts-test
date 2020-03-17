import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { ImagesQuery } from '@/types/graphql-types';

import styles from './index.module.scss';

export const imageQuery = graphql`
  query Images {
    allFile {
      images: edges {
        node {
          name
          ext
          relativePath
          size
          modifiedTime
          changeTime
          childImageSharp {
            original {
              width
              height
            }
            sizes(webpQuality: 75, jpegQuality: 75, pngQuality: 75) {
              src
              srcSet
              srcSetWebp
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }
`;

type Props = {
  file: string;
  alt?: string;
  fadeIn?: boolean;
  loading?: 'auto' | 'lazy' | 'eager';
};

export const Image = ({ file, alt, fadeIn = false, loading = 'auto' }: Props) => {
  const {
    allFile: { images },
  }: ImagesQuery = useStaticQuery(imageQuery);
  const node = React.useMemo(() => images.find(image => image.node.relativePath === file)?.node, [file, images]);

  return node?.childImageSharp ? (
    <Img
      className={styles}
      sizes={node.childImageSharp.sizes as FluidObject}
      alt={alt}
      fadeIn={fadeIn}
      loading={loading}
    />
  ) : null;
};
