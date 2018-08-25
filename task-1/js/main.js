'use strict';

// ==================== indexOf ====================
function indexOf(srcString, ch, fromIdx) {
  if (fromIdx === undefined) {
    fromIdx = 0;
  }

  for (let i = fromIdx; i < srcString.length; i++) {
    if (srcString[i] === ch) {
      return i;
    }
  }

  return -1;
}

// let str = 'abcde';
// let char = 'd';
// let index = 2;
// console.log( indexOf(str, char, index) );