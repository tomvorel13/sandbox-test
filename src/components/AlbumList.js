import React from "react";

import Album from "./Album";

const AlbumList = ({ albums }) => {
  let list = albums.map((album, index) => (
    <Album
      index={index}
      key={album.title}
      title={album.title}
      artist={album.artist}
      released={album.released}
    />
  ));

  return <div>{list}</div>;
};

export default AlbumList;
