const app = "I don't do much."

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() { 
  kittens.pop;
  return kittens
}

//function destructivelyRemoveFirstKitten() { .shift }

// appendKitten(name) { .. }

// prependKitten(name)

// removeLastKitten()

// removeFirstKitten()
