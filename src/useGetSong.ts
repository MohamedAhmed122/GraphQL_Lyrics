import { ApolloError, useQuery } from "@apollo/client";
import { SongID, SingleSong, GET_SINGLE_SONG } from "./GraphQL/query";

interface GetSongs {
  loading: boolean,
  error?: ApolloError
  data?: SingleSong
}
export const useGetSong = (id: string): GetSongs => {
  const { data, loading, error } = useQuery<SingleSong, SongID>(
    GET_SINGLE_SONG,
    {
      variables: { id },
    }
  );
  return { data, loading, error };
};
