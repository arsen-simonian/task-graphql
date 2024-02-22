import { gql } from '@apollo/client';

export const GET_RELATIONS = gql`
  query Relations {
    applicantIndividualCompanyRelations {
      data {
        id
        name
      }
    }
  }
`;

export const GET_POSITIONS = gql`
  query Positions {
    applicantIndividualCompanyPositions {
      data {
        id
        name
      }
    }
  }
`;