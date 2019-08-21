export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Article = {
  __typename?: 'Article',
  id: Scalars['ID'],
  title: Scalars['String'],
  body: Scalars['String'],
};

export type Query = {
  __typename?: 'Query',
  articles: Array<Article>,
};
