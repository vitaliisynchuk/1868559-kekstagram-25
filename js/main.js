function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger (0, 25);

const checkStrokeLength = (stroke, maxLength) => (stroke.length <= maxLength);
checkStrokeLength(1, 13);

function getRandomDiferentNumber (element, min, max) {
  let random = getRandomPositiveInteger(min, max);
  while (element.includes(random)) {
    random = (getRandomPositiveInteger (min, max));
  }
  element.push(random);

  return random;
}

function getRandomArrayElement (element) {
  return element[Math.floor(Math.random()*element.length)];
}

const description = [
  'Красный утюг',
  'Голубое небо',
  'Желтое солнце',
  'Ярккий Фломастер',
];
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const name = [
  'Павел',
  'Артур',
  'Анна',
  'Фиона',
  'Петро',
];

const ids = [];
const ID_MIN = 1;
const ID_MAX = 25;

const likes = [];
const LIKES_MIN = 15;
const LIKES_MAX = 200;

const commentIds = [];
const COMMENT_ID_MIN = 15;
const COMMENT_ID_MAX = 200;

const avatars = [];
const AVATAR_MIN = 15;
const AVATAR_MAX = 200;

const generateComments = () => {
  const comments = [];
  const count = getRandomPositiveInteger(1, 3);
  // const commentId = getRandomDiferentNumber(commentIds , COMMENT_ID_MIN, COMMENT_ID_MAX);
  // const avatar = getRandomDiferentNumber(avatars, AVATAR_MIN, AVATAR_MAX);

  for (let index = 0; index < count; index++) {
    const comment = {
      id: getRandomDiferentNumber(commentIds , COMMENT_ID_MIN, COMMENT_ID_MAX),
      avatar: `img/avatar-${getRandomDiferentNumber(avatars, AVATAR_MIN, AVATAR_MAX)}.svg`,
      message:  getRandomArrayElement(message),
      name: getRandomArrayElement(name),
    };
    comments.push(comment);
  }
  return comments;
};


function createPost() {
  const id = getRandomDiferentNumber(ids, ID_MIN, ID_MAX);
  const like = getRandomDiferentNumber(likes, LIKES_MIN, LIKES_MAX);


  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(description),
    likes: like,
    comments: generateComments(),
  };
}

const similarPosts = Array.from({ length: 25 }, createPost);
similarPosts();
