import React, {useState, useEffect} from "react";
import './Home.css';
import Event from "../../events/event/Event";
import isAdmin from "../../../utils/isAdmin";
import isLiked from "../../../utils/isLiked";
import eventServices from "../../../services/event-services";

const Home = ({isLoggedIn}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            eventServices.get().then(ev => {
                setEvents(ev);
            })
        } else {
            eventServices.get(3).then(ev => {
                setEvents(ev);
            })
        }
    });

    const renderEvents = () => {
        if (isLoggedIn) {
            return events.map(event => {
                return (
                    <Event
                        isAdmin={isAdmin(event)}
                        isLiked={isLiked(event)}
                        key={event._id}
                        event={event}
                        isLoggedIn={true}
                    />
                )
            })
        } else {
            return events.map(event => {
                return (
                    <Event
                        isAdmin={false}
                        isLiked={false}
                        key={event._id}
                        event={event}
                        isLoggedIn={false}
                    />
                )
            })
        }
    }

    return (
        <div className="Home">
            {isLoggedIn ? <h1>ALL EVENTS</h1>
                : <h1>SOME OF THE LATEST EVENTS</h1> }
            <div className="Events">
                { renderEvents() }
            </div>
        </div>
    )
}

export default Home;