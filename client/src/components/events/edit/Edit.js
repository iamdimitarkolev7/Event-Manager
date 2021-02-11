import React from "react";

import '../../../shared/styles.css';
import eventServices from "../../../services/event-services";

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            imageURL: '',
            date: '',
            location: ''
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({name: e.target.value});
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value});
    }

    onChangeImageURL(e) {
        this.setState({imageURL: e.target.value});
    }

    onChangeDate(e) {
        this.setState({date: e.target.value});
    }

    onChangeLocation(e) {
        this.setState({location: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = this.props.match.params.id.toString();
        const {name, description, imageURL, location} = this.state;
        eventServices.edit(id, {name, description, imageURL, location})
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        const id = this.props.match.params.id.toString();

        eventServices.get().then(events => {
            events.forEach(event => {
                if (event._id === id) {
                    this.setState({
                        name: event.name,
                        description: event.description,
                        imageURL: event.imageURL,
                        location: event.location,
                        date: event.date
                    });
                }
            })
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <form className="Edit" onSubmit={this.handleSubmit}>
                <p className="title">Edit your event</p>
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.onChangeName}
                        value={this.state.name}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.onChangeDescription}
                        value={this.state.description}
                    />
                </div>
                <div className="input">
                    <input
                        type="date"
                        name="date"
                        min="01/01/2021"
                        max="01/01/2030"
                        onChange={this.onChangeDate}
                        value={this.state.date}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="imageURL"
                        onChange={this.onChangeImageURL}
                        value={this.state.imageURL}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={this.onChangeLocation}
                        value={this.state.location}
                    />
                </div>
                <button type="submit" className="btn">Edit</button>
            </form>
        )
    }
}

export default Edit;