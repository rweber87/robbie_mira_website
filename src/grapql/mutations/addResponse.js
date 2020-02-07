import gql from 'graphql-tag';

export default gql`
  mutation(
    $first_name: String!
    $last_name: String!
    $response: String!
    $writtenResponse: String
  ) {
    addResponse(
      first_name: $first_name
      last_name: $last_name
      response: $response
      writtenResponse: $writtenResponse
    ) {
      first_name
      last_name
      response
      writtenResponse
    }
  }
`;
