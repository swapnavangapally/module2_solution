(function (window) {
  var goodbye = {};
  goodbye.name = "swapna";
  var greeting = "Good Bye";
  goodbye.bye= function () {
    console.log(greeting + goodbye.name);
  }

  window.goodbye = goodbye;

})(window);
