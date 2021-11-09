import { gql} from '@apollo/client'

export const CORE_SONG_FIELDS = gql`
  fragment CoreSongFields on SongType {
    id
   title
  }
`;


