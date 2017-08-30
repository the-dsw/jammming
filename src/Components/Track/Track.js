import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
   constructor(props) {
        super(props);
        this.state = {
            tag: "+"
        }
        this.renderAction = this.renderAction.bind(this);
   }
    renderAction(e) {
        e.preventDefault();
        let tag;
        this.state.tag === '+' ? tag = this.setState({ tag: '-'}) : tag = this.setState({ tag: '+'});  
                      
        return tag;
    }
    
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <a className="Track-action" onClick={this.renderAction}>{this.state.tag}</a>
            </div>
        );
    }
}

export default Track;
