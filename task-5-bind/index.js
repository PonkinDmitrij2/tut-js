'use strict';

const bind = (fn, context, ...bindArgs) => {
  return (...args) => fn.apply(context, [...bindArgs, ...args]);
};
