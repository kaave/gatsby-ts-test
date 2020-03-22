import format from 'date-fns/format';

export type PostUrl = string & { readonly _postUrl: unique symbol };
export function createPostUrl(rawDate: Date | string): PostUrl {
  return `/posts/${format(typeof rawDate === 'string' ? new Date(rawDate) : rawDate, 'yyyyMMdd')}` as PostUrl;
}
