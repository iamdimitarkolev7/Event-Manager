const eventServices = {
    get: async function(limit) {
        const promise = await fetch(`http://localhost:4000/event?limit=${limit}`);
        const events = await promise.json();

        return events;
    },
    create: function(data) {
        return fetch('http://localhost:4000/event/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    edit: function (id, data) {
        debugger;
        return fetch('http://localhost:4000/event/edit/' + id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json()).catch(err => console.log(err));
    },
    delete: function (id) {
        return fetch('http://localhost:4000/event/delete/' + id, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json());
    },
    like: function (id) {
        return fetch('http://localhost:4000/event/like/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Content-length': '0'
            },
            credentials: 'include'
        }).then(res => res.json());
    }
}

export default eventServices;