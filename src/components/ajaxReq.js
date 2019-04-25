export function getData(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onload = () => resolve(req.response);
        req.error = () => reject(req.status);
        req.responseType = 'json';
        req.open('GET',url);
        req.send();
    });
}

export function postData(url, data) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onload = () => resolve(req.response);
        req.error = () => reject(req.status);
        req.responseType = 'json';
        req.open('POST', url);
        req.setRequestHeader("Content-Type","application/json");
        req.send(data);
    });
}


