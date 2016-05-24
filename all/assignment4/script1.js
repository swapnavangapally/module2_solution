(function (window) {
  var hello = {};
  hello.name = "SWAPNA";
  var greeting = "Hello ";
  hello.sayHello = function (name) {
    console.log(greeting + name);
  }

  window.hello = hello;

})(window);