import slugify from "slugify";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const slugit = (str: string) => slugify(str, { lower: true });
