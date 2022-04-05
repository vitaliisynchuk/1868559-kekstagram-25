import {generateMorePosts} from './data.js';

const createSimilarMiniatures = function (similarMiniatures) {
  const miniatureBlock = document.querySelector('.pictures');
  const miniatureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const similarBlockFragment = document.createDocumentFragment();

  similarMiniatures.forEach(({url, likes, comments}) => {
    const similarElement = miniatureTemplate.cloneNode(true);
    similarElement.querySelector('.picture__img').src = url;
    similarElement.querySelector('.picture__likes').textContent = likes;
    similarElement.querySelector('.picture__comments').textContent = comments.length;

    similarBlockFragment.appendChild(similarElement);
  });

  miniatureBlock.appendChild(similarBlockFragment);
  return(miniatureBlock);
};

export {createSimilarMiniatures};
