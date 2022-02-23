const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive();

// Источик, https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const checkStrokeLength = (stroke, maxLength) => (stroke.length <= maxLength);

checkStrokeLength();

