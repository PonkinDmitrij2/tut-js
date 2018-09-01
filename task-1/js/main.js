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



// ==================== minDigit ====================
function minDigit(n) {
  let arrStrings = String(n).split('');
  let result = +arrStrings[0];

  for (let i = 1; i < arrStrings.length; i++) {
    if (arrStrings[i] === '.') {
      continue;
    }
    if (+arrStrings[i] < result) {
      result = +arrStrings[i];
    }
  }

  return result;
}

// let num = 5.98;
// console.log( minDigit(num) );



// ==================== maxDigit ====================
function maxDigit(n) {
  let arrStrings = String(n).split('');
  let result = +arrStrings[0];

  for (let i = 1; i < arrStrings.length; i++) {
    if (arrStrings[i] === '.') {
      continue;
    }
    if (+arrStrings[i] > result) {
      result = +arrStrings[i];
    }
  }

  return result;
}

// let num = 5.98;
// console.log( maxDigit(num) );



// ==================== getShortestWord ====================
function getShortestWord(srcString) {
  let arrOfWords = srcString.split(' ');
  let result = arrOfWords[0];

  for (let i = 1; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length < result.length) {
      result = arrOfWords[i];
    }
  }

  return result;
}

// let str = 'Мы успешно изучаем веб-программирование';
// console.log( getShortestWord(str) );



// ==================== getLongestWord ====================
function getLongestWord(srcString) {
  let arrOfWords = srcString.split(' ');
  let result = arrOfWords[0];

  for (let i = 1; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > result.length) {
      result = arrOfWords[i];
    }
  }

  return result;
}

// let str = 'Мы успешно изучаем веб-программирование';
// console.log( getLongestWord(str) );



// ==================== minMaxDigit ====================
function minMaxDigit(n) {
  let arrStrings = String(n).split('');
  let minDigit = +arrStrings[0];
  let maxDigit = +arrStrings[0];

  for (let i = 1; i < arrStrings.length; i++) {
    if (arrStrings[i] === '.') {
      continue;
    }

    if (+arrStrings[i] < minDigit) {
      minDigit = +arrStrings[i];
    }

    if (+arrStrings[i] > maxDigit) {
      maxDigit = +arrStrings[i];
    }
  }

  return 'min digit' + ' - ' + minDigit + '\n' + 'max digit' + ' - ' + maxDigit;
}

// let num = 5.98;
// console.log( minMaxDigit(num) );



// ==================== getShortesAndLongesttWords ====================
function getShortesAndLongesttWords(srcString) {
  let arrOfWords = srcString.split(' ');
  let shortestWord = arrOfWords[0];
  let longestWord = arrOfWords[0];

  for (let i = 1; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length < shortestWord.length) {
      shortestWord = arrOfWords[i];
    }

    if (arrOfWords[i].length > longestWord.length) {
      longestWord = arrOfWords[i];
    }
}

return 'shortest word' + ' - ' + shortestWord + '\n' + 'longest word' + ' - ' + longestWord;
}

// let str = 'веб-программирование a';
// console.log( getShortesAndLongesttWords(str) );



// ==================== charCount version 2 ====================
function charCount(srcString) {
  const res = [];
  const spaceSymbols = [',', '.', ' ', ';', '!', '?'];

  for (let i = 0; i < srcString.length; i++) {
    if ( spaceSymbols.indexOf(srcString[i]) >= 0 )
      continue;

    let count = 0;
    for (let j = 0; j < srcString.length; j++) {
      if (srcString[j] === srcString[i]) 
        count++;
    }

    let temp = srcString[i] + '-' + count;
    if (res.indexOf(temp) >= 0)
      continue;
    res.push(temp);
  }

  return res;
}



// ==================== minDigit version 2 ====================
function minDigit(digit1, digit2) {
  return (digit1 < digit2) ? digit1 : digit2;
}



// ==================== maxDigit version 2 ====================
function maxDigit(digit1, digit2) {
  return (digit1 > digit2) ? digit1 : digit2;
}



// ==================== getDigit ====================
function getDigit(n, fn) {
  const arrStrings = String(n).split('');
  let res = Number(arrStrings[0]);

  for (let i = 1; i < arrStrings.length; i++) {
    if (arrStrings[i] === '.') continue;
    res = fn(res, arrStrings[i]);
  }

  return res;
}