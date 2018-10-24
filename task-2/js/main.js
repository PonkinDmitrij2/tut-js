'use strict';

// ==================== fill ====================
function fill(array, value, counter) {
  array.length = 0;

  for (let i = 0; i < counter; i++) {
    array.push(value);
  }
}



// ==================== recursiveCharCount ====================
function recursiveCharCount(srcString, ch) {
  if (!srcString)
    return 0;

  const foundIndex = srcString.indexOf(ch, 0);

  if (foundIndex < 0)
    return 0;

  return 1 + recursiveCharCount(srcString.slice(foundIndex + 1), ch);
}



// ==================== detectArguments ====================
function detectArguments() {
  console.log(`${detectArguments.name} (`);

  for (let i = 0; i < arguments.length; i++) {
    let count = 1 + i;
    console.log(`# ${count} ${arguments[i]}: ${typeof arguments[i]}`);
  }
  console.log(');')
}



// ==================== detectThisType ====================
function detectThisType() {
  console.log(this);
}

// detectThisType.call({});
// detectThisType.call([]);
// detectThisType.call(null);
// detectThisType();