import React from "react";

import '../../../shared/styles.css';
import eventServices from "../../../services/event-services";

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = { description: '', location: '', name: '', date: '', imageURL: '' }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({name: e.target.value});
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value});
    }

    onChangeDate(e) {
        this.setState({date: e.target.value});
    }

    onChangeLocation(e) {
        this.setState({location: e.target.value});
    }

    onChangeImageURL(e) {
        this.setState({imageURL: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, description, location, date, imageURL } = this.state;

        eventServices.create({ name, description, location, date, imageURL })
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const {description, location, name, date, imageURL} = this.state;

        return (
            <form className="Create" onSubmit={this.handleSubmit}>
                <p className="title">Create your event</p>
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.onChangeName}
                        value={name}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.onChangeDescription}
                        value={description}
                    />
                </div>
                <div className="input">
                    <input
                        type="date"
                        name="date"
                        min="01/01/2021"
                        max="01/01/2030"
                        onChange={this.onChangeDate}
                        value={date}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="imageURL"
                        onChange={this.onChangeImageURL}
                        value={imageURL}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={this.onChangeLocation}
                        value={location}
                    />
                </div>
                <button type="submit" className="btn">CREATE</button>
            </form>
        )
    }
}

export default Create;