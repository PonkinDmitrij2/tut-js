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