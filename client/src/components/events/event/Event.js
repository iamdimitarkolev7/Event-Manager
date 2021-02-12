import React from "react";
import {Link,useHistory } from "react-router-dom";

import "./Event.css";
import eventServices from "../../../services/event-services";
import isLoggedIn from "../../../utils/auth";

const Event = ({event, isAdmin, _id}) => {
    const history = useHistory();

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push('/edit/' + id);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
    }

    const hitLike = (e) => {
        const id = e.currentTarget.id;
        eventServices.like(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
    }

    return (
        <div className="Event" key={_id}>
            <img src={event.imageURL} alt="alt"/>
            <p className="name">{event.name}</p>
            <p className="description">{event.description}</p>
            <div className="creator">
                <span>Creator: </span>
                {event.admin.firstName + ' ' + event.admin.lastName}
            </div>
            {!isAdmin ?
                    <div className="likes ">
                        <i className="far fa-thumbs-up" id={event._id} onClick={hitLike}></i>
                        <span> { event.likes.length + (event.likes.length === 1 ? " Like" : " Likes")}</span>
                    </div>
                 :
                <div className="buttons">
                    <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                    <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
                </div>}
        </div>
    )
}

export default Event;