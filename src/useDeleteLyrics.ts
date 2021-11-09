import { Song, SongID, Songs, DELETE_SONG, GET_SONGS } from "./GraphQL/query";
import { useMutation } from "@apollo/client";
export const useDeleteLyrics = (id: string) => {
  const [
    deleteLyrics,
    { loading: deleteLyricsLoading, error: deleteLyricsError },
  ] = useMutation<{ deleteSong: Song }, SongID>(DELETE_SONG, {
    variables: { id },
    refetchQueries: [GET_SONGS, "getSongs"],
  });
  return { deleteLyrics, deleteLyricsLoading, deleteLyricsError };
};
