const isAdmin = (event) => {
    const userId = JSON.parse(sessionStorage.getItem('user'))._id;

    return event.admin._id === userId;
}

export default isAdmin;