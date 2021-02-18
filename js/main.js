const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(1, 50);
// https://habr.com/ru/post/312880/

const check = function ( lineNumber, maxLength) {
  return (lineNumber.length < maxLength);
}
check('track', 4);

