import { Url } from './Url';

export type MetaInfo = {
  title: string;
  description: string;
  image: Url;
  url: Url;
  type?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: Url;
  noindex?: boolean;
};
