import React, { Component } from "react";

//Components
import { SubmitButton } from "./Buttons/index";

import "../styles/color-styles.css";

class AddAlbumForm extends Component {
  state = {
    title: "",
    artist: "",
    released: ""
  };

  onSubmitHandler = e => {
    e.preventDefault();

    let { handleAddAlbum } = this.props;
    let currState = this.state;

    const newAlbum = {
      ...currState
    };

    handleAddAlbum(newAlbum);
  };

  handleChange = e => {
    const id = e.target.id;

    this.setState({
      [id]: e.target.value
    });
  };

  render() {
    const { title, artist, released } = this.state;
    return (
      <>
        <div class="row">
          <form class="col s12" onSubmit={this.onSubmitHandler}>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="title"
                  type="text"
                  class="validate"
                  onChange={this.handleChange}
                  value={title}
                />
                <label for="title">Title</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="artist"
                  type="text"
                  class="validate"
                  onChange={this.handleChange}
                  value={artist}
                />
                <label for="artist">Artist</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="released"
                  type="number"
                  class="validate"
                  onChange={this.handleChange}
                  value={released}
                />
                <label for="released">Released</label>
              </div>
            </div>
            <SubmitButton />
          </form>
        </div>
      </>
    );
  }
}

export default AddAlbumForm;
