(function (global) {
  var goodbye = {};
  goodbye.name = "swapna";
  var greeting = "Good Bye";
  goodbye.bye= function (name) {
    console.log(greeting + name);
  }

  global.goodbye = goodbye;

})(window);
