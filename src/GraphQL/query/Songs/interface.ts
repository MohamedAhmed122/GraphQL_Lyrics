export interface Song {
  id: string;
  title: string;
}

export interface Songs {
  songs: Song[];
}

export interface Lyrics {
  id: string;
  content: string;
  likes: number;
}

export interface SingleSongFields extends Song { lyrics: Lyrics[]}

export interface SingleSong {
  song :SingleSongFields
}

export interface SongID{
  id : string;
}



export interface SongsField extends Songs { lyrics: Lyrics[]}