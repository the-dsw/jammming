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
      ],
      playlistName: 'Play List Name',
      playlistTracks: [
        { id: '5', name: 'Stronger', artist: 'Britney Spears', album: 'Oops!... I Did It Again'},
        { id: '9', name: 'So Emotional', artist: 'Whitney Houston', album: 'Whitney'},
        { id: '7', name: 'It\'s Not Right But It\'s Okay', artist: 'Whitney Houston', album: 'My Love Is Your Love'},
      ] 
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if(track === this.state.playlistTracks.id) {
      console.log('Exist !!!!!')
    } else {
      this.setState({
        id: track.id, name: track.name, artist: track.artist, album: track.album
      })
    }
  }
  removeTrack(track) {

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
