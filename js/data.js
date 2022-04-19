import {getRandomPositiveInteger, getRandomDiferentNumber, getRandomArrayElement} from './util.js';

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

const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const POSTS_NUMBER = 25;

const generateComments = () => {
  const comments = [];
  const count = getRandomPositiveInteger(1, 10);

  for (let index = 0; index < count; index++) {
    const comment = {
      id: getRandomDiferentNumber(commentIds , COMMENT_ID_MIN, COMMENT_ID_MAX),
      avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
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


function generateMorePosts() {
  const similarPosts = Array.from({ length: POSTS_NUMBER }, createPost);
  return similarPosts;
}

export {generateMorePosts, generateComments};
