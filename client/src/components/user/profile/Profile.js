import React, {useEffect, useState} from "react";

import './Profile.css';
import userImg from '../../../images/user.png';
import userService from "../../../services/user-services";

const Profile = () => {
    const [display, setDisplay] = useState('createdEvents');

    const user = JSON.parse(sessionStorage.getItem('user'));

    const likedEventsClick = (e) => {
        setDisplay('likedEvents');
    }

    const createdEventsClick = (e) => {
        setDisplay('createdEvents');
    }

    return (
        <div className="Profile">
            {display === 'likedEvents' ?
                <div className="likedEvents">
                    <p>Liked Events</p>
                </div> :
                <div className="createdEvents">
                    <p>Created Events</p>
                </div>}
            <div className="profile-data">
                <img src={userImg} alt="alt"/>
                <p className="name">{user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase()}</p>
                <p className="username">{user.username}</p>
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

export default Profile;