import gql from 'graphql-tag'
import { ArticleListItem } from './ArticleListItem'

const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      ...SimpleArticle
    }
  }
  ${ArticleListItem.Fragment}
`

export function ArticleList() {
  console.log(GET_ARTICLES)
  // useQuery(GET_ARTICLES)
  // return <div>...</div>
}
