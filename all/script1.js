(function (window) {
  var hello = {};
  hello.name = "SWAPNA";
  var greeting = "Hello ";
  hello.sayHello = function () {
    console.log(greeting + hello.name);
  }

  window.hello = hello;

})(window);