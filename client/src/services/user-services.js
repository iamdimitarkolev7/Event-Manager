const userService = {
    get: function(id) {
        return fetch('http://localhost:4000/user/' + id, {
           method: 'GET',
           credentials: 'include'
        }).then(res => res.json());
    },
    register: function(data) {
        return fetch(`http://localhost:4000/user/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json()).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },
    login: function(data) {
        return fetch(`http://localhost:4000/user/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.json();
        }).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },
    logout: function() {
        return fetch(`http://localhost:4000/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text()).then(() => sessionStorage.clear());
    }
}

export default userService;