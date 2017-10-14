const app = "I don't do much."

var destructivelyAppendKitten = function (array, name) {
  array.push(name);
  return array
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
