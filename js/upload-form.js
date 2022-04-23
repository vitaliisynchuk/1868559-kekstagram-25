import './upload-form-check.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagInputElement = uploadForm.querySelector('.text__hashtags');
const textDescriptionElement = uploadForm.querySelector('.text__description');

function openForm () {
  uploadFile.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  });
}

function closeForm () {
  uploadCancelButton.addEventListener('click', () => {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFile.value = '';
  });

  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      if(evt.target !== hashtagInputElement) {
        if (evt.target !== textDescriptionElement){
          uploadOverlay.classList.add('hidden');
          body.classList.remove('modal-open');
        }
      }
    }
  });
}

export {closeForm, openForm};


