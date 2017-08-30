import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
        { id: "0", name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water" },
        { id: "1", name: "Tiny Dancer", artist: "Tim McGraw", album: "Love Story" }, 
        { id: "2", name: "Tiny Dancer", artist: "Rockabye Baby!", album: "Lullaby Renditions of Elton John" }, 
        { id: "3", name: "Tiny Dancer", artist: "The White Raven", album: "Tiny Dancer" }, 
        { id: "4", name: "Tiny Dancer", artist: "Ben Folds", album: "Ben Folds Live" } 
      ] 
    };

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
