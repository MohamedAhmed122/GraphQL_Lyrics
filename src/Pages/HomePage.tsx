import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_SONGS, Songs } from "../query";

export const HomePage: React.FC = () => {
  const { loading, data, error } = useQuery<Songs>(GET_SONGS);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;
  if (data) data.songs.map((item) => console.log(item.id));
  return (
    <div>
      <h1> HomePage</h1>
      <Link to="/detail">Details</Link>
    </div>
  );
};
