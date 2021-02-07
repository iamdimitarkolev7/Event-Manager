import React from "react";

import "./Event.css";

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Event" key={this.props._id}>
                <img src={this.props.imageURL} alt="alt"/>
                <p className="description">{this.props.description}</p>
                <div className="creator">
                    <span>Creator: </span>
                    {this.props.creator}
                </div>
                <div className="likes">
                    <i className="fas fa-thumbs-up"></i>
                    {this.props.likes}
                    <span> Likes</span>
                </div>
            </div>
        )
    }
}

export default Event;