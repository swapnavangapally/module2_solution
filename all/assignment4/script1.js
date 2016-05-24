(function (global) {
  var hello = {};
  hello.name = "SWAPNA";
  var greeting = "Hello ";
  hello.sayHello = function (name) {
    console.log(greeting + name);
  }

  global.hello = hello;

})(window);