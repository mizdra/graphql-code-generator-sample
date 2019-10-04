import * as Types from './types.generated';

import { SimpleArticleFragment } from './ArticleListItem.generated';


export type GetArticlesQueryVariables = {};


export type GetArticlesQuery = (
  { __typename?: 'Query' }
  & { articles: Array<(
    { __typename?: 'Article' }
    & SimpleArticleFragment
  )> }
);
