import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { DetailParams } from "../types";
import { useAddLyrics } from "../useAddLyrics";
import { useLikeLyrics } from "../useLikeLyrics";
import { useGetSong } from "../useGetSong";
import { useDeleteLyrics } from "../useDeleteLyrics";

export const DetailPage: React.FC = () => {
  const [content, setContent] = useState("");
  const { id } = useParams<DetailParams>();
  const history = useHistory();
  const { data, loading, error } = useGetSong(id);

  const { addLyrics, lyrics, isError, isLoading } = useAddLyrics(content, id);

  const { likeLyrics, likeData, isLikeLoading, errorLike } = useLikeLyrics();

  const { deleteLyrics, deleteLyricsLoading, deleteLyricsError } =
    useDeleteLyrics(id);

  const handleAddSong = (): void => {
    addLyrics();
    setContent("");
  };
  const handleLike = (id: string): void => {
    likeLyrics({ variables: { id } });
  };

  const handleDeleteLyrics = (): void => {
    deleteLyrics();
    history.goBack();
  };

  console.log(lyrics, isLoading, isError, "AddLyrics");
  console.log(likeData, isLikeLoading, errorLike, "likeLyrics");
  console.log(deleteLyricsLoading, deleteLyricsError, "deleteLyrics");

  if (loading) return <div>Loading ..</div>;
  if (error || !data) return <div>error</div>;
  console.log(data, "getSongs");

  return (
    <div>
      <h1>DetailPage</h1>
      <div>
        <button onClick={handleDeleteLyrics}>Delete Lyrics</button>
        <h1> Song Name :{data?.song?.title}</h1>
        {data.song.lyrics.map((lyrics) => (
          <div key={lyrics.id}>
            <div> song Lyrics : {lyrics.content} </div>
            <div className="flex">
              <div> How Many likes? : {lyrics.likes} </div>
              <button onClick={() => handleLike(lyrics.id)} className="btn">
                Like Lyrics
              </button>
            </div>
            <button>Delete Lyrics</button>
          </div>
        ))}
      </div>
      <div className="create_lyrics">
        <input
          className="input"
          placeholder="Add Lyrics "
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="create" onClick={handleAddSong}>
          Add Lyrics
        </button>
      </div>
    </div>
  );
};
