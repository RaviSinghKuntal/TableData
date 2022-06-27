import { gql } from "@apollo/client";


export const GET_DATA = gql`
{
  search(query: "topic:react sort:updated-desc", type: REPOSITORY, first: 100) {
    repositoryCount
    nodes {
      ... on Repository {
        nameWithOwner
        description
        updatedAt
        createdAt
        stargazerCount,
        forkCount
      }
    }
  }
}
`;