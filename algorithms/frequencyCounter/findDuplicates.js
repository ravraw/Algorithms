// find duplicates

function areThereDuplicates1() {
  const argsSet = {};
  for (let i = 0; i < arguments.length; i++) {
    if (argsSet[arguments[i]]) {
      return true;
    } else {
      argsSet[arguments[i]] = 1;
    }
  }
  return false;
}

//////
function areThereDuplicates2(...restArgs) {
  const argsSet = {};
  for (let arg of restArgs) {
    if (argsSet[arg]) {
      return true;
    } else {
      argsSet[arg] = 1;
    }
  }
  return false;
}

function areThereDuplicates3() {
  const obj = {};
  for (let arg of arguments) {
    if (!obj[arg]) {
      obj[arg] = 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 6));
