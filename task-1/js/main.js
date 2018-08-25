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



// ==================== reverse ====================
function reverse(srcString) {
  if (srcString === undefined || (typeof srcString) !== 'string') {
    return 'srcString';
  }

  let result = '';

  for (let i = srcString.length - 1; i >= 0; i--) {
    result += srcString[i];
  }

  return result;
}

// let str = 'Последние две строки помечены.';
// console.log( reverse(str) );