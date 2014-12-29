function makeUpperCase(textfield) {
  textfield.value = textfield.value.toUpperCase();
}

function makeMeUpperCase() {
  makeUpperCase(this);
}

window.onload = function() {
  document.getElementById("uppercase-field").onkeyup =
    makeMeUpperCase;
}

function showValue(inputID, resultID) {
  var html =
    "<div class='sample'>" + 
    document.getElementById(inputID).value +
    "</div>"
  document.getElementById(resultID).innerHTML =
    html;
}

function doOnClickOf(buttonID, event) {
  var e = event || window.event;
  var code = e.charCode || e.keyCode;
  if (code == 40) {  // 40 is Down Arrow
    var f = document.getElementById(buttonID).onclick;
    f();
  }
}

function on(event) {
  var e = event || window.event;
  var message = 
    "<ul class='sample'>" +
    "  <li>clientX: " + e.clientX + "</li>" +
    "  <li>clientY: " + e.clientY + "</li>" +
    "  <li>screenX: " + e.screenX + "</li>" +
    "  <li>screenY: " + e.screenY + "</li>" +
    "</ul>";
  var region = document.getElementById("messageRegion");
  region.innerHTML = message;
}

function off() {
  var region = document.getElementById("messageRegion");
  region.innerHTML = "";
}


// Useful for testing. Attach this function to onkeypress.
// Try it on IE, Firefox, and Chrome with both printable
// and non-printable characters, and you will get three quite-different results.

function showKeyCode(event) {
  var e = event || window.event;
  var code = e.charCode || e.keyCode;
  alert("charCode is " + code + ", character is " + String.fromCharCode(code));
}