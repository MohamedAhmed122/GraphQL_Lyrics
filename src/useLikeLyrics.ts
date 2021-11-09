import { ApolloError, useMutation } from "@apollo/client";
import { Lyrics, likeParams, LIKE_LYRIC } from "./GraphQL/query";

type likeLyricsParams = { variables: likeParams };

interface LikeLyrics {
  errorLike?: ApolloError;
  isLikeLoading: boolean;
  likeLyrics(param: likeLyricsParams): void;
  likeData?: null | {
    likeLyric: Lyrics;
  };
}

export const useLikeLyrics = (): LikeLyrics => {
  const [
    likeLyrics,
    { data: likeData, loading: isLikeLoading, error: errorLike },
  ] = useMutation<{ likeLyric: Lyrics }, likeParams>(LIKE_LYRIC, {});

  return { likeLyrics, likeData, isLikeLoading, errorLike };
};
