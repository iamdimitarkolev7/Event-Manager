import React from "react";
import {Link} from "react-router-dom";

import "./Event.css";
import eventServices from "../../../services/event-services";

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="Event" key={this.props._id}>
                <img src={this.props.event.imageURL} alt="alt"/>
                <p className="description">{this.props.event.description}</p>
                <div className="creator">
                    <span>Creator: </span>
                    {this.props.event.admin.firstName + ' ' + this.props.event.admin.lastName}
                </div>
                {!this.props.isAdmin ? <div className="likes ">
                    <i className="far fa-thumbs-up"></i>
                    <span>{this.props.event.likes.length} Likes</span>
                </div> :
                <div className="buttons">
                    <Link className="links" to="/edit">Edit</Link>
                    <button className="links" id={this.props.event._id} onClick={this.handleDelete}>Delete</button>
                </div>}
            </div>
        )
    }
}

export default Event;