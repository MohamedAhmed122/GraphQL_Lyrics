import { gql } from "@apollo/client";
import { CORE_LYRICS_FIELDS, CORE_SONG_FIELDS } from "../../fragments";

export const ADD_LYRICS_TO_SONG = gql`
  mutation addNewLyrics($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      ...CoreSongFields
      lyrics {
        ...CoreLyricFields
      }
    }
  }
  ${CORE_SONG_FIELDS}
  ${CORE_LYRICS_FIELDS}
`;

export const LIKE_LYRIC = gql`
  mutation likeLyric($id: ID!) {
    likeLyric(id: $id) {
      ...CoreLyricFields
    }
  }
  ${CORE_LYRICS_FIELDS}
`;
