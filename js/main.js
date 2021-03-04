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
const IDS = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
]

function mixId() {
  const array = IDS.slice(0);
  for (let i = (array.length - 1); i > 0; i -= 1)
  {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  let mixed = array;
  for (let i = 0; i <= array.length - 1; i++) {
    mixed = array[i]
  }
  return (
    mixed)
}
mixId()

const URLS = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
]

function mixUrls() {
  const array = URLS.slice(0);
  for (let i = (array.length - 1); i > 0; i -= 1)
  {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  let mixed = array;
  for (let i = 0; i <= array.length - 1; i++) {
    mixed = array[i]
  }
  return [
    mixed]
}

const DESCRIPTION = [
  'Я дома',
  'Я гуляю',
  'Я работаю',
]

const ID_COMMENTS= [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
]
function mixIdComments() {
  const array = ID_COMMENTS.slice(0);
  for (let i = (array.length - 1); i > 0; i -= 1)
  {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  let mixed = array;
  for (let i = 0; i <= array.length - 1; i++) {
    mixed = array[i]
  }
  return (
    mixed)
}


mixIdComments()

const AVATAR = [
  1,2,3,4,5,6,
]

const MESSAGE = [
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

// создание комментов

const createComments = () => {

  const randomAvatar = Math.floor(Math.random() * AVATAR.length);
  const randomMessage =  Math.floor(Math.random() * MESSAGE.length);
  const randomName =  Math.floor(Math.random() * name.length);
  return {
    id: mixIdComments(),
    avatar:'photos/' + AVATAR[randomAvatar] +'.jpg',
    message: MESSAGE[randomMessage],
    name: name[randomName],
  }
}


// тут конец комментов
const createPost = () => {
  const randomDescription =  Math.floor(Math.random() * DESCRIPTION.length);
  const randomLikes =Math.floor(Math.random() * (200 - 15)) + 15;
  return {
    id: mixId(),
    url: 'photos/' + mixUrls() +'.jpg',
    description:  DESCRIPTION[randomDescription],
    likes: randomLikes,
    comments: createComments(),
  };
}
createPost
//console.log(createPost())
