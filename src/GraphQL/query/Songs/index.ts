import { CORE_LYRICS_FIELDS } from "./../../fragments/lyrics/index";
import { gql } from "@apollo/client";
import { CORE_SONG_FIELDS } from "../../fragments";

const GET_SONGS = gql`
  ${CORE_SONG_FIELDS}
  query getSongs {
    songs {
      ...CoreSongFields
    }
  }
`;

const GET_SINGLE_SONG = gql`
  query getSongById($id: ID!) {
    song(id: $id) {
      ...CoreSongFields
      lyrics {
        ...CoreLyricFields
      }
    }
  }
  ${CORE_SONG_FIELDS}
  ${CORE_LYRICS_FIELDS}
`;

const DELETE_SONG = gql`
  mutation deleteSong($id: ID!) {
    deleteSong(id: $id) {
      ...CoreSongFields
    }
  }
  ${CORE_SONG_FIELDS}
`;

const ADD_NEW_SONG =gql``
export { GET_SONGS, GET_SINGLE_SONG, DELETE_SONG , ADD_NEW_SONG};
