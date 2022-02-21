const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max) {
    return('Минимальное число больше или одинаковое максимального.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive();

// Источик, https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const checkStrokeLenght = (strokeItems) => {
  const MAX_STROKE_ITEMS = 140;
  if (strokeItems <= MAX_STROKE_ITEMS) {
    return(true);
  }
  return(false);
};

checkStrokeLenght();
