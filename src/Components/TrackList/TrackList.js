import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
        <div className="TrackList">
          {(typeof this.props.tracks !== 'undefined') ? this.props.tracks.map((track) => {
            console.log(track)
            return <Track key={track.id} track={track}  />
          }): ''}
        </div>
    );
  }
}

export default TrackList;


