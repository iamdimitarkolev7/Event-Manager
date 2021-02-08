import React from "react";

function Logout({ logout, history }) {
    logout(history);
    return null;
}

export default Logout;