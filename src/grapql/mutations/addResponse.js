import gql from 'graphql-tag';

export default gql`
  mutation(
    $email: String!
    $first_name: String!
    $last_name: String!
    $response: String!
    $writtenResponse: String
  ) {
    addResponse(
      email: $email
      first_name: $first_name
      last_name: $last_name
      response: $response
      writtenResponse: $writtenResponse
    ) {
      email
      first_name
      last_name
      response
      writtenResponse
    }
  }
`;
