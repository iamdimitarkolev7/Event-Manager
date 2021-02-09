import React, {useState, useEffect} from "react";
import Events from "../../events/Events";
import './Home.css';

const Home = ({isLoggedIn}) => {
    const [limit, setLimit] = useState(3);

    useEffect(() => {
        if (isLoggedIn) {
            setLimit(null)
        } else {
            setLimit(3)
        }
    }, [isLoggedIn]);

    return (
        <div className="Home">
            <h1>SOME OF THE LATEST EVENTS</h1>
            <Events limit={limit}/>
        </div>
    )
}

export default Home;