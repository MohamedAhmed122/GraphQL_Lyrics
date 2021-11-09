import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import { GET_SONGS, Songs, Song } from "../GraphQL/query";

export const HomePage: React.FC = () => {
  const { loading, data, error } = useQuery<Songs>(GET_SONGS);
  const history = useHistory();

  const handleNavigate = (nav: string) => history.push(nav);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="page">
      <h1 className="text-align title"> HomePage</h1>
      {data &&
        data.songs.map((song: Song) => (
          <div
            onClick={() => handleNavigate(`/detail/${song.id}`)}
            className="song_container"
            key={song.id}
          >
            <p className="link song">{song.title}</p>
          </div>
        ))}
      <button
        className="button create"
        onClick={() => handleNavigate("/create")}
      >
        Add New Song
      </button>
    </div>
  );
};
