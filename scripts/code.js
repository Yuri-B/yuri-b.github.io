
function start() {
  // start and delegate everything here
  // more awesome stuff to come.. like integration with PornHub, Camsluts, Chaturbate, 4Chan and kittens.
  // load stuff when the DOM has loaded!!!
  window.onload = function() {
    writeCurrentYear()
  }
}

function writeCurrentYear() {
  var presentYear = new Date().getFullYear();
  var dateElement = document.getElementById("displayYear");

  dateElement.textContent = presentYear;
  dateElement.setAttribute("datetime", presentYear);
}


start()
