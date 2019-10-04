import * as Types from './types.generated';


export type SimpleArticleFragment = (
  { __typename?: 'Article' }
  & Pick<Types.Article, 'title' | 'body'>
);
