const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(1, 50);
// https://habr.com/ru/post/312880/

let check = function ( lineNumber,maxLength) {
  if(lineNumber.length >= maxLength) {
     return false;
  }
 return true;
}
  check('panzer', 4);
  check('cat', 4);
