

export { GET_SONGS, GET_SINGLE_SONG, DELETE_SONG } from "./Songs";
export type {
  Songs,
  Song,
  SingleSong,
  Lyrics,
  SongID,
  SingleSongFields,
  SongsField
} from "./Songs/interface";

export {ADD_LYRICS_TO_SONG, LIKE_LYRIC} from './Lyrics'
export type {AddLyricsParams, likeParams} from './Lyrics/interface'
