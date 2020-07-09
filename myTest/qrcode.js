let _ = require('lodash');
let fs = require('fs-extra');
var qr = require('qr-image');
let async = require('async');
let path = require('path');

let codes = [
    {
        "_id": ("5b766d328426a96e916082fe"),
        "code": "1"
    },

    /* 2 */
    {
        "_id": ("5b766d328426a96e916082ff"),
        "code": "7"
    },

    /* 3 */
    {
        "_id": ("5b766d328426a96e916082fd"),
        "code": "i"
    },

    /* 4 */
    {
        "_id": ("5b766d328426a96e91608300"),
        "code": "k"
    },

    /* 5 */
    {
        "_id": ("5b766d328426a96e91608301"),
        "code": "v"
    },

    /* 6 */
    {
        "_id": ("5b766d328426a96e91608302"),
        "code": "l"
    },

    /* 7 */
    {
        "_id": ("5b766d328426a96e91608303"),
        "code": "b"
    },

    /* 8 */
    {
        "_id": ("5b766d328426a96e91608304"),
        "code": "4"
    },

    /* 9 */
    {
        "_id": ("5b766d328426a96e91608305"),
        "code": "a"
    },

    /* 10 */
    {
        "_id": ("5b766d328426a96e91608307"),
        "code": "t"
    },

    /* 11 */
    {
        "_id": ("5b766d328426a96e91608306"),
        "code": "r"
    },

    /* 12 */
    {
        "_id": ("5b766d328426a96e91608308"),
        "code": "o"
    },

    /* 13 */
    {
        "_id": ("5b766d328426a96e91608309"),
        "code": "c"
    },

    /* 14 */
    {
        "_id": ("5b766d328426a96e9160830a"),
        "code": "3"
    },

    /* 15 */
    {
        "_id": ("5b766d328426a96e9160830b"),
        "code": "8"
    }
];

async.each(codes, t => {
    let url = 'http://ab.chadegushi.com/s/' + t.code;
    console.log(url);
    var qr_svg = qr.image(url, { type: 'png', size: 10 });
    qr_svg.pipe(fs.createWriteStream(path.join(__dirname, '/png', t.code + '.png')));
}, console.log);
