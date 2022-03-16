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

export {getRandomPositiveInteger, checkStrokeLength, getRandomDiferentNumber, getRandomArrayElement};
