const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export class Restservice {

    static postName(url, data) {
        return fetch("/api/v1/" + url, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(data)
        });
    }

    static login(userName, password) {
        const requestOptions = {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({ userName, password })
        };

        return fetch('/admin/authenticate', requestOptions)
        .then(handleResponse)
        .then(admin => {
            localStorage.setItem('admin', JSON.stringify(admin));
            return admin
        });
    }
}