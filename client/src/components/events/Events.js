import React, {useState, useEffect} from "react";
import Event from "./event/Event";

import "./Events.css";
import eventServices from "../../services/event-services";
import isLoggedIn from "../../utils/auth";

const Events = ({limit}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            eventServices.get().then(ev => {
                setEvents(ev);
            })
        } else {
            eventServices.get(limit).then(ev => {
                setEvents(ev);
            })
        }
    })

    const renderEvents = () => {
        return events.map(event => {
            return (
                <Event
                    key={event._id}
                    description={event.description}
                    imageURL={event.imageURL}
                    creator={event.admin.username}
                    likes={event.likes.length}
                />
            )
        })
    }

    return (
        <div className="Events">
            {renderEvents()}
        </div>
    )
}

export default Events;