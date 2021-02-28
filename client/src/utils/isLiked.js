const isLiked = (event) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user._id;

    return event.likes.includes(userId);
}

export default isLiked;