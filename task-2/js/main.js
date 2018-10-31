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



// ==================== debugDecorator ====================
function debugDecorator(fn) {
  return function() {
    const time0 = performance.now();
    const result = fn(...arguments);
    const time1 = performance.now();

    detectArguments(...arguments);
    console.log(`result: ${result}`);
    console.log(`time: ${time1 - time0}ms`);
  };
}

// function helloAndReturn(msg) {
//   alert(msg);
//   return msg;
// }

// const decoratedHelloAndReturn = debugDecorator(helloAndReturn);
// decoratedHelloAndReturn('Hello, world!');



// ==================== detectThisType v2 ====================
function detectThisType() {
  console.log(typeof this);
}



// ==================== debugDecorator v2 ====================
function debugDecorator(fn) {
  return function() {
    let result;
    let time0;
    let time1;

    detectArguments.apply(null, arguments);

    time0 = performance.now();

    try {
      result = fn.apply(null, arguments);
    } catch (err) {
      result = `Error - ${err}`;
    } finally {
      time1 = performance.now();
    }

    console.log(`result: ${result}`);
    console.log(`time: ${time1 - time0}ms`);
  };
}