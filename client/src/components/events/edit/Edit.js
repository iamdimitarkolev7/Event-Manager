import React from "react";

import '../../../shared/styles.css';

const Edit = ({event}) => {
    return (
        <form className="Edit">
            <p className="title">Edit your event</p>
            <div className="input">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                />
            </div>
            <div className="input">
                <input
                    type="date"
                    name="date"
                    min="01/01/2021"
                    max="01/01/2030"
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    name="imageURL"
                    placeholder="imageURL"
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                />
            </div>
            <button type="submit" className="btn">Edit</button>
        </form>
    )
}

export default Edit;