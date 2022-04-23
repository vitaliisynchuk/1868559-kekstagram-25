import {checkStrokeLength} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const textDescription = uploadForm.querySelector('.text__description');
const pristine = new Pristine(uploadForm, {
  classTo: 'text__wrapper',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'text__wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const COMMENTAY_MAX_LENGTH = 140;

function validateCommentary () {
  function commentaryLength (value) {
    return checkStrokeLength(value, COMMENTAY_MAX_LENGTH);
  }
  pristine.addValidator(textDescription, commentaryLength, 'Максимум 140 символов');
}

const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
function validateHashtags () {
  const validateHashtag = (value) => {
    const hashtagArrey = value.split(' ');
    return hashtagArrey.every((item) => RE.test(item));
  };

  const HASHTAGS_LENGTH = 5;

  function validateHashtagLength (value) {
    const hashtagArrey = value.split(' ');
    return hashtagArrey.length <= HASHTAGS_LENGTH;
  }

  function validateHashtagRepeat (value) {
    const hashtagArrey = value.split(' ');
    return hashtagArrey.every((item, index, array) => array.slice(index + 1, array.length).every((elem) => elem !== item));
  }
  pristine.addValidator(hashtagInput, validateHashtag, 'Формат хэштега "#хэштег" без пробелов и спецсимволов #, @, $');
  pristine.addValidator(hashtagInput, validateHashtagLength, 'Не больше 5 хэштегов');
  pristine.addValidator(hashtagInput, validateHashtagRepeat, 'Хэштег не может повторяться');
}


uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

validateHashtags();
validateCommentary ();

