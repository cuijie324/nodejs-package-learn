let emoji = require('node-emoji');

var onMissing = function (name) {
  return '';
};

var emojified = emoji.emojify('I :unknown_emoji: :star: :another_one: 崔杰😊', onMissing);
// emojified: I unknown_emoji ⭐️ another_one
console.log(emojified);

var format = function (code, name) {
  return '<img alt="' + code + '" src="' + name + '.png" />';
};
 
emojified = emoji.emojify('I :unknown_emoji: :star: :another_one:', null, format);
// emojified: I <img alt="❤️" src="heart.png" /> <img alt="☕️" src="coffee.png" />
console.log(emojified);

emojified = emoji.replace('I :unknown_emoji: :star: :another_one: 崔杰😊', '');
console.log(emojified);
