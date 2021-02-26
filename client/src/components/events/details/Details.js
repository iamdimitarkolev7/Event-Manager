import React, {useState, useEffect} from "react";

import "./Details.css";
import {useParams} from "react-router";
import eventServices from "../../../services/event-services";

const Details = () => {
    const [event, setEvent] = useState({});
    const {id} = useParams();

    useEffect(() => {
        eventServices.details(id).then(res => {
            setEvent(res);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div className="Details">
            <img src={event.imageURL} alt="alt" id={event._id}/>
            <p className="name">{event.name}</p>
            <p className="location">{event.location}</p>
            <p className="date">{event.date}</p>
            <p className="description">{event.description}</p>
        </div>
    )
}

export default Details;