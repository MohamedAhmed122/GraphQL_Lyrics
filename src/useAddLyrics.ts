import { ApolloError, useMutation } from "@apollo/client";

import {
  SingleSong,
  SongID,
  SingleSongFields,
  AddLyricsParams,
  ADD_LYRICS_TO_SONG,
  GET_SINGLE_SONG,
} from "./GraphQL/query";

interface Lyrics {
  addLyrics(): void;
  lyrics?: null | {
    addLyricToSong: SingleSongFields;
  };
  isError?: ApolloError;
  isLoading: boolean;
}

export const useAddLyrics = (content: string, songId: string): Lyrics => {
  const [addLyrics, { data: lyrics, loading: isLoading, error: isError }] =
    useMutation<{ addLyricToSong: SingleSongFields }, AddLyricsParams>(
      ADD_LYRICS_TO_SONG,
      {
        variables: { content, songId },
        update: (cache, { data }) => {
          if (data) {
            const prevLyrics = cache.readQuery<SingleSong, SongID>({
              query: GET_SINGLE_SONG,
              variables: { id: songId },
            });
            if (prevLyrics) {
              cache.writeQuery<SingleSong, SongID>({
                query: GET_SINGLE_SONG,
                variables: { id: songId },
                data: {
                  song: {
                    lyrics: data.addLyricToSong.lyrics,
                    id: prevLyrics.song.id,
                    title: prevLyrics.song.title,
                  },
                },
              });
            }
          }
        },
      }
    );
  return { addLyrics, lyrics, isError, isLoading };
};
