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
}