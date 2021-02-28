import React, {useEffect, useState} from "react";

import './Profile.css';
import userImg from '../../../images/user.png';
import userService from "../../../services/user-services";
import Event from "../../events/event/Event";

const Profile = () => {
    const [display, setDisplay] = useState('createdEvents');
    const [user, setUser] = useState({});
    const [likedEvents, setLikedEvents] = useState([]);
    const [createdEvents, setCreatedEvents] = useState([]);

    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem('user'))._id;
        userService.get(userId).then(res => {
            setUser(res);
            setLikedEvents(res['likedEvents']);
            setCreatedEvents(res['createdEvents']);
        }).catch(err => console.log(err));
    }, []);

    const likedEventsClick = (e) => {
        setDisplay('likedEvents');
    }

    const createdEventsClick = (e) => {
        setDisplay('createdEvents');
    }

    const renderLikedEvents = () => {
        return likedEvents.map(event => {

            return (
                <Event
                    isAdmin={false}
                    isLiked={true}
                    key={event._id}
                    event={event}
                    display="profile"
                />
            )
        })
    }

    const renderCreatedEvents = () => {
        return createdEvents.map(event => {
            return (
                <Event
                    isAdmin={true}
                    isLiked={false}
                    key={event._id}
                    event={event}
                />
            )
        })
    }

    const render = () => {
        return (
            <div className="Profile">
                {display === 'likedEvents' ?
                    <div className="likedEvents">
                        <h1>Liked Events</h1>
                        {likedEvents.length !== 0 ? renderLikedEvents() : <span>No liked events</span>}
                    </div> :
                    <div className="createdEvents">
                        <h1>Created Events</h1>
                        {createdEvents.length !== 0 ? renderCreatedEvents() : <span>No created events</span>}
                    </div>}
                <div className="profile-data">
                    <img src={userImg} alt="alt"/>
                    <p className="name">{user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase()}</p>
                    <p className="username">{ '@' + user.username}</p>
                    <p className="liked-events">Liked events: {user.likedEvents.length}</p>
                    <p className="created-events">Created events: {user.createdEvents.length}</p>
                    <div className="buttons">
                        <button onClick={likedEventsClick}>Liked events</button>
                        <button onClick={createdEventsClick}>Created events</button>
                    </div>
                </div>
            </div>
        )
    }

    return Object.keys(user).length ? render() : <span>Loading...</span>

}

export default Profile;