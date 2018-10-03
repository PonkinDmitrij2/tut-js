'use strict';

// ==================== sortWords ====================
function sortWords(srcString) {
  const arrWords = srcString.split(' ');

  arrWords.sort(function(a, b) {
    return a.length - b.length;
  })

  return arrWords.join(' ');
}

// const str = 'ф-ция получает на вход строку со словами слова разделяются пробелами';
// console.log( sortWords(str) );



// ==================== findDuplicates ====================
function findDuplicates(array) {
  const res = [];

  array.forEach(function(item, i, arr) {
    if (arr.indexOf(item) !== i && res.indexOf(item) < 0) {
      res.push(item);
    }
  })

  return res;
}

// const arr2 = ['one', true, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 'two', 'one', true];
// console.log( findDuplicates(arr2) );



// ==================== isPalindrom (recursive solution) ====================
function isPalindrome(candidate) {
  if (candidate.length <= 1) {
    return true;
  }

  if (candidate[0] !== candidate[candidate.length - 1]) {
    return false;
  }

  return isPalindrome(candidate.slice(1, candidate.length - 1));
}

// const str = 'radar';
// console.log( isPalindrome(str) );



// ==================== isPalindrom v2 ====================
function isPalindrome(candidate) {
  return candidate === candidate.split("").reverse().join("");
}



// ==================== findPalindroms ====================
function findPalindroms(srcString) {
  const arrWords = srcString.split(' ');
  const res = [];

  arrWords.forEach(function(item) {
    if (isPalindrome(item)) {
      res.push(item);
    }
  });

  return res;
}



// ==================== splitString ====================
function splitString(srcString, splitBy) {
  const tempChar = splitBy[0];

  for (let i = 1; i < splitBy.length; i++) {
    srcString = srcString.split(splitBy[i]).join(tempChar);
  }

  return srcString.split(tempChar);
}



// ==================== findPalindroms ====================
// modified to use different whitespace characters
function findPalindroms(srcString, splitBy = [' ']) {
  const arrWords = splitString(srcString, splitBy);
  const res = [];

  arrWords.forEach(function(item) {
    if (isPalindrome(item)) {
      res.push(item);
    }
  });

  return res;
}



// ==================== sortWords ====================
// modified to use different whitespace characters
function sortWords(srcString, splitBy = [' ']) {
  const arrWords = splitString(srcString, splitBy);

  arrWords.sort(function(a, b) {
    return a.length - b.length;
  })

  return arrWords.join(' ');
}



// ==================== splitString v2 ====================
function splitString(srcString, splitBy) {
  const words = [];
  let tmp = '';

  for (let i = 0; i < srcString.length; i++) {

    if (splitBy.indexOf(srcString[i]) >= 0) {
      if (tmp) {
        words.push(tmp);
        tmp = '';
      }
      continue;
    }

    tmp += srcString[i];
  }

  if (tmp)
    words.push(tmp);

  return words.join(' ');
}