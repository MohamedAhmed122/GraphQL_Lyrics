import { gql} from '@apollo/client'

export const CORE_LYRICS_FIELDS = gql`
  fragment CoreLyricFields on LyricType {
    id
   likes
   content
  }
`;




