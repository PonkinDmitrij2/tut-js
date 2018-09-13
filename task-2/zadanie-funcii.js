const functions = (function() {
  return {
    detectArguments() {
      // вывести на консоль имя ф-ции и список аргументов в виде: 
      //<function_name>(
      //#1 <значение1>: тип
      //#2 <значение2>: тип
      //#3 <значение3>: тип
      // и тд
      //);
    },

    fill(array, value, counter) {
      //заполнить <counter> элементов массива значениями <value>
      //если в массиве уже есть какие-то данные то переписать их
      // после того как отработает ф-ция массив должен быть размером <counter> и заполнен значениями <value>
      //пример
      // const array = [1, 2, 3, 4, 5, 6];
      //functions.fill(array, 0, 2); //array: [0, 0]
    },

    detectThisType() {
      // ф-ция должна выводить на консоль тип своего контекста выполнения this,
      // и повызывать эту ф-цию с разными контекстами,например functions.detectThisType.call({}), functions.detectThisType.call([]), functions.detectThisType.call(null)
    },

    debugDecorator(fn) {
      //задание со 'звёздочкой'
      //ф-ция доджна вернуть новую ф-цию
      //эта новая функция будет выполнять ф-цию fn и выводить на консоль:
      //1 - аргументы, которые передали внутрь, для этого использовать detectArguments
      //2 - результат выполнения. Если fn "выбросила"(throw) ошибку то вывести на консоль ошибку
      //3 - время выполнения ф-ции fn в милисекундах
      // пример:
      // function helloAndThrow(msg) {
      //   alert(msg);
      //   throw msg;
      // }

      // function helloAndReturn(msg) {
      //   alert(msg);
      //   return msg;
      // }

      // const decoratedHelloAndThrow = debugDecorator(helloAndThrow);

      // decoratedHelloAndThrow('Hello, world!');
      // //arguments: 'Hello, world!': string
      // //result: Error - 'Hello, world!'
      // //time: 12345ms

      // const decoratedHelloAndReturn = debugDecorator(helloAndReturn);

      // decoratedHelloAndReturn('Hello, world!');
      // //arguments: 'Hello, world!': string
      // //result: 'Hello, world!'
      // //time: 12345ms
    },

    recursiveCharCount(srcString, ch) { 
      // ф-ция должна подсчитывать кол-во вхождений сомвола <ch> в строку <srcString> но делать это должна рекурсивно
      // условие выхода из рекурсии (!srcString) - если строка пустая
    },

    secursiveCharCountAsync(srcString, ch) {
      // ф-ция будет делать то же самое что и предыдущая но каждый следующий вызов должен происходить через setTimeout();
      // после того как закончится подсчет - результат вывести на консоль: подсчет окончен, кол-во вхождений - <n>
      // пока кол-во вхождений считается - вывести на консоль "идет подсчет..."
    }
  };
})();

