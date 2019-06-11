// Press Alt-Enter to convert `getPrecessedData` to a function with async/await syntax
export function getPrecessedData(url) {
    return downloadData(url)
        .then(v => {
            return processDataInWorker(v)
        })
        .catch(e => {})
}


// `fetch` returns a Promise, therefore you can convert `download` to a function with async/await syntax
function download() {
    return fetch('https://jetbrains.com').then( result => result.ok)
}
