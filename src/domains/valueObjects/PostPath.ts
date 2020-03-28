import { format } from 'date-fns';

export type PostPath = string & { readonly _articlePath: unique symbol };
export function createPostPath(from: Date | string): PostPath {
  return `/posts/${format(typeof from === 'string' ? new Date(from) : from, 'yyyyMMdd')}` as PostPath;
}
