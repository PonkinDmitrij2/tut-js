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



// ==================== count ====================
function count(srcString, ch) {
  let count = 0;
  let index = 0;
  while (1) {
    let foundIndex = indexOf(srcString, ch, index);
    if (foundIndex === -1) {
      break;
    }
    count++;
    index = foundIndex + 1;
  }

  return count;
}

// let target = 'o';
// let str = 'Semicolon';
// console.log( count(str, target) );



// ==================== charCount ====================
function charCount(srcString) {
  let temp = '';
  let result = [];

  next:
  for (let i = 0; i < srcString.length; i++) {
    if (srcString[i] === ',' || srcString[i] === '.' || srcString[i] === ' ') {
      continue;
    }

    temp = srcString[i] + '-' + count(srcString, srcString[i]);

    for (let j = 0; j < result.length; j++) {
      if (result[j] === temp) {
        continue next;
      }
    }

    result.push(temp);
  }

  return result;
}

// let str = 'Hello, world';
// console.log( charCount(str) );