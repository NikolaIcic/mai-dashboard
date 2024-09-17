export async function apiFetchPost(url, data, jwt) {
    const promise = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        },
        body: JSON.stringify(data)
    });
    return await promise.json();
}

export async function apiFetchGet(url, jwt) {
    const promise = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        }
    });
    return await promise.json();
}

export async function apiPromiseGet(url, jwt) {
    const promise = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        }
    });
    return promise;
}

export async function apiPromisePost(url, data, jwt) {
    const promise = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        },
        body: JSON.stringify(data)
    });
    return promise;
}