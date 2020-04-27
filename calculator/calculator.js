module.exports = {
  add,
};

function add(a = 0, b = 0) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('both need to be numbers');
  }
}

function isNumber(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

exports.sum = function (...args) {
  return args.reduce((acc, e) => acc + e)
}