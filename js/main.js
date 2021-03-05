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
  return array
}

const DESCRIPTION = [
  'Я дома',
  'Я гуляю',
  'Я работаю',
]

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
  const listMixedComments = function(){
    const array = mixId();
    for (let i = 0; i <= array.length - 1; i++)
      return array[i]};
  const randomAvatar = Math.floor(Math.random() * AVATAR.length);
  const randomMessage =  Math.floor(Math.random() * MESSAGE.length);
  const randomName =  Math.floor(Math.random() * name.length);
  return {
    id: listMixedComments(),
    avatar:'photos/' + AVATAR[randomAvatar] +'.jpg',
    message: MESSAGE[randomMessage],
    name: name[randomName],
  }
}


// тут конец комментов

const createPost = () => {
  const listMixed = function(){
    const array = mixId();
    for (let i = 0; i <= array.length - 1; i++)
      return array[i]};
  const randomDescription =  Math.floor(Math.random() * DESCRIPTION.length);
  const randomLikes =Math.floor(Math.random() * (200 - 15)) + 15;
  return {
    id: listMixed(),
    url: 'photos/' + listMixed() +'.jpg',
    description:  DESCRIPTION[randomDescription],
    likes: randomLikes,
    comments: createComments(),
  };
}
createPost()
//console.log(createPost())
