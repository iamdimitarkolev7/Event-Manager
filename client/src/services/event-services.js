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
    delete: function (id) {
        return fetch('http://localhost:4000/event/delete/' + id, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json());
    }
}

export default eventServices;