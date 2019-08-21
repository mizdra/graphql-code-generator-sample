import gql from 'graphql-tag'

const GET_USER = gql`
  query GetUser {
    currentUser {
      displayName
    }
  }
`

console.log(GET_USER)
