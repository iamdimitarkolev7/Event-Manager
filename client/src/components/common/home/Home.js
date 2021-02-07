import React from "react";
import Events from "../../events/Events";
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <h1>SOME OF THE LATEST EVENTS</h1>
                <Events/>
            </div>
        )
    }
}

export default Home;