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
  let random = (getRandomPositiveInteger (min, max));
  while (element.includes(random)) {
    random = (getRandomPositiveInteger (min, max));
  }
  element.push(random);
}

function getRandomArrayElement (element) {
  return element[Math.floor(Math.random()*element.length)]
}

let id = [];
let url = [];
let description = [
  'Красный утюг',
  'Голубое небо',
  'Желтое солнце',
  'Ярккий Фломастер',
];
let likes = [];
let commentId = [];
let avatar = [];
let message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
let name = [
  'Павел',
  'Артур',
  'Анна',
  'Фиона',
  'Петро',
]

getRandomDiferentNumber(id, 1, 25);
getRandomDiferentNumber(url, 1, 25);
getRandomDiferentNumber(likes, 15, 200);
getRandomDiferentNumber(commentId, 1, 300);
getRandomDiferentNumber(avatar, 1, 6);


const createPost = () => ({
  id: id,
  url: `photos/${  url  }.jpg`,
  description: getRandomArrayElement(description),
  likes: likes,
  comments: {
    id: commentId,
    avatar: `img/avatar-${  avatar }.svg`,
    message:  getRandomArrayElement(message),
    name: getRandomArrayElement(name),
  },
});

let similarPosts = Array.from({ length: 4 }, createPost);
console.log(similarPosts);
