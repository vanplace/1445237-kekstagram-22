import {DESCRIPTION, AVATAR, name, MESSAGE, mixId} from './util.js'

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
const CREAT_POST_COUNT = 16;
const createPosts = () => new Array(CREAT_POST_COUNT).fill(null).map(() => createPost());

//createPost()
//console.log(createPost())
export {createPost,createPosts}

