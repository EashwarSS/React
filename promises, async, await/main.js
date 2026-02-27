const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
        // reject('Promise rejected');
    }, 2000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});