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
  kittens.push()
  return [name]
};

function prependKitten(array, name) {
  return [name, ...array]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length- 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
