const app = "I don't do much."

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens
}

function appendKitten(name) {
  return [name]
};

function prependKitten(array, name) {
  return [name, ...array]
}

function removeLastKitten(array) {
  return array.slice(0, array.length- 1)
}

// removeFirstKitten()
