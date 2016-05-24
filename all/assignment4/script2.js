(function (window) {
  var goodbye = {};
  goodbye.name = "swapna";
  var greeting = "Good Bye";
  goodbye.bye= function (name) {
    console.log(greeting + name);
  }

  window.goodbye = goodbye;

})(window);
