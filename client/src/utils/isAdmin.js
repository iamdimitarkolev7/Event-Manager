const isAdmin = (event) => {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));

    return !!currentUser ? currentUser.createdEvents.some(id => id === event._id) : false;
}

export default isAdmin;