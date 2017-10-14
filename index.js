const app = "I don't do much."

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  name.unshift(name);
  return name
}

//function destructivelyRemoveLastKitten() { .pop }

//function destructivelyRemoveFirstKitten() { .shift }

// appendKitten(name) { .. }

// prependKitten(name)

// removeLastKitten()

// removeFirstKitten()
