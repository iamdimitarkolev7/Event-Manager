const cookieParser = () => {
    return document.cookie.split('; ')
        .reduce((acc, cookie) => {
            const [cookieName, cookieValue] = cookie.split('=');
            acc[cookieName] = cookieValue;
            return acc;
        }, {});
}

export default cookieParser;