const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(1, 50);
// https://habr.com/ru/post/312880/

const check = function ( lineNumber, maxLength) {
  return (lineNumber.length < maxLength);
}
check('track', 4);

//новое задание


const id = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
]
const url = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
]
const description = [
  'Я дома',
  'Я гуляю',
  'Я работаю',
]

const idComments= [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
]
const avatar = [
  1,2,3,4,5,6,
]
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',

]
const name = [
  'Вася',
  'Семён Семёныч',
  'Серафим',
]

const createComments = () => {
  let randomIdComments = Math.floor(Math.random() * idComments.length);
  let randomAvatar = Math.floor(Math.random() * avatar.length);
  let randomMessage =  Math.floor(Math.random() * message.length);
  let randomName =  Math.floor(Math.random() * name.length);
  return {
    id: idComments[randomIdComments],
    avatar:'photos/' + avatar[randomAvatar] +'.jpg',
    message: message[randomMessage],
    name: name[randomName],
  }
}

const createPost = () => {
  let randomId =  Math.floor(Math.random() * id.length);
  let randomUrl =  Math.floor(Math.random() * url.length);
  let randomDescription =  Math.floor(Math.random() * description.length);
  let randomLikes =Math.floor(Math.random() * (200 - 15)) + 15;
  return {
    id: id[randomId],
    url: 'photos/' + url[randomUrl] +'.jpg',
    description:  description[randomDescription],
    likes: randomLikes,
    comments: createComments,
  };
};
//  console.log(createPost())

//Не пойму как сделать их уникальными и у меня выходит объект в объекте
