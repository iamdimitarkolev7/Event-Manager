const userService = {
    register: function(data) {
        return fetch(`http://localhost:4000/user/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    login: function(data) {
        return fetch(`http://localhost:4000/user/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    logout: function() {
        return fetch(`http://localhost:4000/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text());
    }
}

export default userService;