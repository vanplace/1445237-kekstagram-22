import {createPost} from './data.js';

//const userDialog = document.querySelector('.overlay');
//userDialog.classList.remove('hidden');


const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const fragment = document.createDocumentFragment();
const post = createPost();
post.forEach((url, likes, description) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = description;
  fragment.appendChild(pictureElement);
});
picturesList.appendChild(fragment);


