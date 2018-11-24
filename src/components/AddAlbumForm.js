import React, { Component } from "react";

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
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    const { title, artist, released } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input
              value={title}
              onChange={this.handleChange}
              type="text"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="artist">Artist</label> <br />
            <input
              value={artist}
              onChange={this.handleChange}
              type="text"
              name="artist"
            />
          </div>
          <div>
            <label htmlFor="released">Year of Release</label> <br />
            <input
              value={released}
              onChange={this.handleChange}
              type="text"
              name="released"
            />
          </div>
          <input type="submit" value="Add" />
        </form>
      </>
    );
  }
}

export default AddAlbumForm;
