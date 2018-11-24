import React from "react";

const Album = ({ title, artist, released, index }) => {
  return (
    <div class="row">
      <div class="col s12 m12">
        <div style={{ "margin-bottom": 0 }} class="card grey lighten-5">
          <div class="card-content">
            <h5>{title}</h5>
            <span class="card-title">{artist}</span>
            <h6>{released}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
