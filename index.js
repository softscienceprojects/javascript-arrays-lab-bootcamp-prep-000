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

// appendKitten(name) { .. }

// prependKitten(name)

// removeLastKitten()

// removeFirstKitten()
