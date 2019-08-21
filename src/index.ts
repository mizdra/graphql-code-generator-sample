import gql from 'graphql-tag'

const SimpleUserFragment = gql`
  fragment SimpleUser on User {
    displayName
  }
`

const GET_USER = gql`
  query GetUser {
    currentUser {
      ...SimpleUser
    }
  }
  ${SimpleUserFragment}
`

console.log(GET_USER)
