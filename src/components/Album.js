import React from "react";

const Album = ({ title, artist, released, index }) => {
  return (
    <div className="card">
      <div className="left">
        <span className="index-number">{index + 1}</span>
      </div>
      <div className="right">
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <h3>{released}</h3>
      </div>
    </div>
  );
};

export default Album;
