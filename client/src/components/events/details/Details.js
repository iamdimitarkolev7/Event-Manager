import React, {useState, useEffect} from "react";

import "./Details.css";
import {useParams, useHistory} from "react-router";
import isAdmin from "../../../utils/isAdmin";
import isLiked from "../../../utils/isLiked";
import eventServices from "../../../services/event-services";

const Details = () => {
    const [event, setEvent] = useState({});
    const [likeStatus, setLikeStatus] = useState(false);
    const [admin, setIsAdmin] = useState(false);
    const {id} = useParams();
    const history = useHistory();

     useEffect(() => {
         eventServices.details(id).then(res => {
            setEvent(res);
            setIsAdmin(isAdmin(res));
            setLikeStatus(isLiked(res));
        }).catch(err => console.log(err));
    }, []);

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push('/edit/' + id);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
        history.push('/');
    }

    const hitLike = (e) => {
        const id = e.currentTarget.id;
        eventServices.like(id).then(() => {
            history.push('/details/' + id);
            setLikeStatus(true);
        }).catch(err => console.log(err));
    }

    const hitDislike = (e) => {
        const id = e.currentTarget.id;
        eventServices.dislike(id).then(() => {
            history.push('/details/' + id);
            setLikeStatus(false);
        }).catch(err => console.log(err));
    }

    const render = () => {
        return (
            <div className="Details">
                <img src={event.imageURL} alt="alt" id={event._id}/>
                <div className="question-answers">
                    <span className="question">What is the name of the event?</span>
                    <p className="name">{event.name}</p>
                    <span className="question">Where will the event be held?</span>
                    <p className="location">{event.location}</p>
                    <span className="question">When will the event be held?</span>
                    <p className="date">{event.date}</p>
                    <span className="question">What is the event about?</span>
                    <p className="description">{event.description}</p>
                </div>
                <div className="buttons">
                    {!admin ?
                        <div className="likes">
                            {likeStatus ?
                                <i className="far fa-thumbs-up blue" id={event._id} onClick={hitDislike}></i> :
                                <i className="far fa-thumbs-up" id={event._id} onClick={hitLike}></i>
                            }
                        </div>
                        :
                        <div className="buttons">
                            <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                            <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
                        </div>}
                </div>
            </div>
        )
    }

    return Object.keys(event).length  ? render() : <span>Loading...</span>
}

export default Details;