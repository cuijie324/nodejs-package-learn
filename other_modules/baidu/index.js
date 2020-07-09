var fs = require('fs');
const _ = require('lodash');
const AipSpeechClient = require('baidu-aip-sdk').speech;

const APP_ID = '11020369';
const API_KEY = 'Yqq92ChYKwZ5Lge9IRvUGu6I';
const SECRET_KEY = '6MOceF9BLFoTEiKQaqP76jVNogL31UBO';

let client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

client.text2audio('100', { vol: 15, per: 0 }).then(function (result) {
    if (result.data) {
        fs.writeFileSync(`tts.mpVoice2${Date.now()}.mp3`, result.data);
    } else {
        // 服务发生错误
        console.log(result)
    }
}, function (e) {
    // 发生网络错误
    console.log(e)
});