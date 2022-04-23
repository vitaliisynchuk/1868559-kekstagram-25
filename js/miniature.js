import { createBigPicture } from './big-picture.js';

const createSimilarMiniatures = function (posts) {
  const miniatureBlock = document.querySelector('.pictures');
  const miniatureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const similarBlockFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const similarElement = miniatureTemplate.cloneNode(true);
    similarElement.querySelector('.picture__img').src = post.url;
    similarElement.querySelector('.picture__likes').textContent = post.likes;
    similarElement.querySelector('.picture__comments').textContent = post.comments.length;
    similarBlockFragment.appendChild(similarElement);

    similarElement.addEventListener('click', () => {
      createBigPicture(post);
    });
  });

  miniatureBlock.appendChild(similarBlockFragment);

  return(miniatureBlock);
};

export {createSimilarMiniatures};
