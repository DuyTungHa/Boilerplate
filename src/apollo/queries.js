import { gql } from 'apollo-boost';

export const TEST_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`;

export const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos
  }
`;
