const bigPictureBlock = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureImg = bigPictureBlock.querySelector('.big-picture__img');
const bigPictureLikesCount = bigPictureBlock.querySelector('.likes-count');
const bigPictureCommentsCount = bigPictureBlock.querySelector('.comments-count');
const socialCaption = bigPictureBlock.querySelector('.social__caption');

const socialComments = bigPictureBlock.querySelector('.social__comments');
const socialComment = bigPictureBlock.querySelector('.social__comment');
// const socialCommentsCount = bigPictureBlock.querySelector('.social__comment-count');
// const commentsLoader = bigPictureBlock.querySelector('.comments-loader');

const closeButton = bigPictureBlock.querySelector('.big-picture__cancel');
// const socialPicture = socialComment.querySelector('.social__picture');
// const socialText = socialComment.querySelector('.social__text');

const createBigPicture = function({url, likes, comments, description}) {
  bigPictureBlock.classList.remove('hidden');
  body.classList.add('modal-open');
  socialComments.innerHTML = '';

  bigPictureImg.querySelector('img').src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  comments.forEach(({avatar, name, message}) => {
    const similarElement = socialComment.cloneNode(true);
    const socialPicture =  similarElement.querySelector('.social__picture');
    const socialText =  similarElement.querySelector('.social__text');

    socialPicture.src = avatar;
    socialPicture.alt = name;
    socialText.textContent = message;
    socialComments.appendChild(similarElement);
  });

  // function openBigPicture () {
  //   miniatureImage.addEventListener('click', () => {
  //     bigPictureBlock.classList.remove('hidden');
  //     body.classList.add('modal-open');
  //   });
  // }

  function closeBigPicture () {
    closeButton.addEventListener('click', () => {
      bigPictureBlock.classList.add('hidden');
      body.classList.remove('modal-open');
    });
    document.addEventListener('keydown', (evt) => {
      if(evt.keyCode === 27) {
        bigPictureBlock.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  }

  closeBigPicture ();
  // openBigPicture ();
};

export {createBigPicture};
