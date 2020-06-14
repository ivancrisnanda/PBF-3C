import domainPath from './Config.js'
const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default PostAPI;