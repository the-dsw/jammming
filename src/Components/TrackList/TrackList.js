import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
        <div className="TrackList">
          {(typeof this.props.tracks !== 'undefined') ? this.props.tracks.map((track) => {
            return <Track key={track.id} track={track}  onRemove={this.props.onRemove} onAdd={this.props.onAdd} />
          }): ''}
        </div>
    );
  }
}

export default TrackList;


