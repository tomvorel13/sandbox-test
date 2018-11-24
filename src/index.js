import React, { Component } from "react";
import ReactDOM from "react-dom";

//Components
import AlbumList from "./components/AlbumList";
import AddAlbumForm from "./components/AddAlbumForm";
import { Header } from "./components/Layouts/index";
import { FloatingButton } from "./components/Buttons/index";

// Data
import { myAlbums } from "./data/data";

//Styles
import "./styles.css";

class App extends Component {
  state = {
    albums: myAlbums,
    showAddForm: false
  };

  showAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  };

  handleAddAlbum = newAlbum => {
    const { albums } = this.state;
    const updatedAlbums = [...albums, newAlbum];

    this.setState({
      albums: updatedAlbums
    });

    this.showAddForm();
  };

  render() {
    const { albums, showAddForm, newAlbum } = this.state;

    return (
      <>
        <Header />
        <div className="container">
          {showAddForm && (
            <AddAlbumForm
              handleAddAlbum={this.handleAddAlbum}
              newAlbum={newAlbum}
              albums={albums}
            />
          )}
          <FloatingButton showAddForm={this.showAddForm} />
          <AlbumList albums={albums} />
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
