// function commentsLoader () {
//   const socialComment = document.querySelector('.social__comment');
//   const socialCommentsLoader = document.querySelector('.social__comments-loader');

//   socialCommentsLoader.classList.remove('hidden');

//   for (let i = 5; i < socialComment.length; i++) {
//     socialComment[i].style.display = 'none';
//   }

//   let countD = 5;
//   socialCommentsLoader.addEventListener('click', () => {
//     countD += 5;
//     if (countD <= socialComment.length) {
//       for(let i = 0; i < countD; i++){
//         socialComment[i].style.display = 'block';
//       }
//     }
//   });
// }

// commentsLoader();
