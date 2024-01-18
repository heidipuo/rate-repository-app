import { gql } from '@apollo/client';

export const SIGN_IN_USER = gql`
mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;