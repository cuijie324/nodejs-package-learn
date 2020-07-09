const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs-extra');
let api_key = 'K6J4r5C0icmtcKgCqwbHON0njAGuYTlKpd4p0yqZ';

function ltp_search (text, callback) {
    let url = 'http://api.ltp-cloud.com/analysis/';
    let pattern = 'ws';
    let format = 'json';

    url = url + '?api_key=' + api_key + '&text=' + encodeURIComponent(text) + '&pattern=' + pattern + '&format=' + format;
    console.log(url);
    fetch(url, { method: 'POST' })
        .then(res => res.json())
        .then(json => callback(null, json))
        .catch(err => callback(err));
}

let text = '你喜欢大海，我爱过你';
ltp_search(text, (err, result) => {
    if (err) throw err;
    fs.writeJson(path.join('./ltp.json'), result, console.log);
});
