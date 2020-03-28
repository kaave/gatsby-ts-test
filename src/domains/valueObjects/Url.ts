export type Url = string & { readonly _url: unique symbol };
export function toUrl(from: string): Url {
  if (!/https?:\/\//.test(from)) throw new TypeError(`Invalid URL pattern:${from}`);
  return from as Url;
}
