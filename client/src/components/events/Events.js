import React from "react";
import Event from "./event/Event";

import "./Events.css";

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    getEvents = async () => {
        const promise = await fetch('http://localhost:4000/event');
        const events = await promise.json();

        this.setState({events});
    }

    renderEvents() {
        const {events} = this.state;

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

    componentDidMount() {
        this.getEvents();
    }

    render() {
        return (
            <div className="Events">
                {this.renderEvents()}
            </div>
        )
    }
}

export default Events;