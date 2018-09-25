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