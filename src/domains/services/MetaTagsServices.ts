import { MetaInfo } from '@domains/valueObjects/MetaInfo';
import { HelmetProps } from 'react-helmet';

export const toHelmetMetaProps = ({
  title,
  description,
  image,
  url,
  type = 'article',
  twitterCard = 'summary',
  canonical,
  noindex,
}: MetaInfo): HelmetProps['meta'] => [
  // common
  { name: 'description', content: description },
  ...(canonical ? [{ name: 'canonical', content: canonical }] : []),
  ...(noindex ? [{ name: 'robots', content: 'noindex' }] : []),

  // google
  { itemProp: 'name', content: title },
  { itemProp: 'description', content: description },
  { itemProp: 'image', content: image },

  // facebook
  { property: 'og:url', content: url },
  ...(type ? [{ property: 'og:type', content: type }] : []),
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: image },

  // twitter
  ...(twitterCard ? [{ name: 'twitter:card', content: twitterCard }] : []),
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
  { name: 'twitter:image', content: image },
];
