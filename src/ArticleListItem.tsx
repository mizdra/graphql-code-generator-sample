import gql from 'graphql-tag'
import { SimpleArticleFragment } from './ArticleListItem.generated'

type Props = {
  article: SimpleArticleFragment
}

export function ArticleListItem(_props: Props) {
  // return <div>...</div>
}

ArticleListItem.Fragment = gql`
  fragment SimpleArticle on Article {
    title
    body
  }
`
