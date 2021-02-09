import React from "react";

import "./Event.css";
import isLoggedIn from "../../../utils/auth";

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
                <div className="likes greyLikes">
                    <i className="fas fa-thumbs-up"></i>
                    <span>{this.props.likes} Likes</span>
                </div>
            </div>
        )
    }
}

export default Event;