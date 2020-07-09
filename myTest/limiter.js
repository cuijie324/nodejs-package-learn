const RateLimiter = require('limiter').RateLimiter;

//每分钟最多150次请求
let limiter = new RateLimiter(350, 'minute');
setInterval(() => {
    limiter.removeTokens(1, (err, remainingRequests) => {
        console.log('>>', err, remainingRequests, new Date());
    });
}, 100);

// limiter.removeTokens(1, (err, remainingRequests) => {
//     console.log(err, remainingRequests);
//     console.log('>>>>>>>>', new Date());
// });

//每250ms调用一次
// let limiter = new RateLimiter(1, 250);
// limiter.removeTokens(1, (err, remainingRequests) => {
//     console.log(">>>>", err, remainingRequests);
//     console.log('message', new Date());
// });

//立即调用
// let limiter = new RateLimiter(150, 'hour', true);  // fire CB immediately
// Immediately send 429 header to client when rate limiting is in effect
// limiter.removeTokens(1, function (err, remainingRequests) {
//     console.log(err, remainingRequests);
//     if (remainingRequests < 1) {
//         console.log('429 Too Many Requests - your IP is being rate limited');
//     } else {
//         console.log('something else');
//     }
// });

// var limiter = new RateLimiter(10, 'second');

// if (limiter.tryRemoveTokens(5))
//     console.log('Tokens removed');
// else
//     console.log('No tokens removed');

// var limiter = new RateLimiter(1, 250);

// // returns 1 since we did not remove a token and our number of tokens per interval is 1
// console.log(limiter.getTokensRemaining());

setTimeout(() => {
    console.log('game over')
}, 5 * 60 * 1000);
