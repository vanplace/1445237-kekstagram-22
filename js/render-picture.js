import {createPosts} from './data.js';

//const userDialog = document.querySelector('.overlay');
//userDialog.classList.remove('hidden');


const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const fragment = document.createDocumentFragment();
const post = createPosts();
post.forEach((post) => {

  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.description;
  fragment.appendChild(pictureElement);
});
picturesList.appendChild(fragment);
