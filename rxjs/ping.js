var Rx = require('rx')
var R = require('ramda')
var pingCommand = require('ping')

var config = {
    timeout: 10,       // 超时为10秒
    extra: ["-i 2"],   // 每次发包间隔时长
}
function promisablePing (host) {
    return new Promise((resolve, reject) => {
        pingCommand.sys.probe(host
            , isAlive => isAlive ? resolve(host) : reject(`${host}: unreachable.`)
            , config)
    })
}
function ping (host) {
    return Rx.Observable.create(observer => {
        return promisablePing(host)
            .then(host => observer.onNext(host))
            .then(_ => observer.onCompleted())
            .catch(err => observer.onError(err))
    })
}

var tasks = R.range(2, 254).map(i => ping(`192.168.3.${i}`))
Rx.Observable
    .merge(...tasks)
    .subscribe(
        host => console.log(`pong: ${host}`),
        err => console.error(err)
    )