import { gql } from "@apollo/client";

const GET_SONGS = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;

export { GET_SONGS };
