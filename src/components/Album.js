import React from "react";

const Album = ({ title, artist, released, index }) => {
  return (
    <div class="row">
      <div class="col s12 m12">
        <div class="card blue-grey lighten-5">
          <div class="card-content">
            <span class="card-title">{title}</span>
            <h5>{artist}</h5>
            <h6>{released}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
