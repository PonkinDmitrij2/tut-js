'use strict';

// ==================== fill ====================
function fill(array, value, counter) {
  array.length = 0;

  for (let i = 0; i < counter; i++) {
    array.push(value);
  }
}