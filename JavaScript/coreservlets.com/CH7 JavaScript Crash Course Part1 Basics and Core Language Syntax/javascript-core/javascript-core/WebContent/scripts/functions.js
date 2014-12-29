function square(x) { return(x*x); }

//Or, var square = function(x) { return(x*x); };

var f = square;

// For Firebug:
//   square(5);
//   f(5);

function double(x) { return(x*2); }

var functs = [square, f , double];

var f2 = functs[0];

// f2(7);
// functs[2](7);

var randomObj = { a: 3, b: "Hi", c: square};

// randomObj.a;
// randomObj.b;
// randomObj.c(6);

function third(x) {
  return(x / 3);
}

function triple(x) {
  return(x * 3);
}

function nineTimes(x) {
  return(x * 9);
}

function operate(f) {
  var nums = [1, 2, 3];
  for(var i=0; i<nums.length; i++) {
    var num = nums[i];
    console.log("Operation on %o is %o.", 
                num, f(num));
  }
}

function randomFunct() {
  if(Math.random() > 0.5) {
    return(square);
  } else {
    return(double)
  }
}

var f3 = randomFunct();

//(function(x) {return(x+7);})(10);

function randomFunct2() {
  if(Math.random() > 0.5) {
    return(function(x) { return(x*x); });
  } else {
    return(function(x) { return(x*2); });
  }
}

// For Firebug:
//   operate(third);
//   operate(triple);
//   operate(nineTimes);

function makeTimes7Function() {
  return(function(n) { return(n*7); });
}

// For Firebug:
//   var f = makeTimes7Function();
//   f(7); 

function makeMultiplierFunction(m) {
  return(function(n) { return(n*m); });
}

// For Firebug:
//   var test = 10;
//   var f = makeMultiplierFunction(test);
//   f(7); 
//   test = 100;
//   f(7);

function hypotenuse(leg1, leg2) {
  return(Math.sqrt(leg1*leg1 + leg2*leg2));
}

function fullName() {
  return(this.firstName + " " + this.lastName);
}

var person = { firstName: "David", lastName: "Flanagan" };

// fullName();
// fullName.call(person);

function abx(x) {
  return(this.a + this.b + x);
}

var funnyObj = { a: 1, b: 2 };

// abx(3);
// abx.call(funnyObj, 3);

// Trick so that the Firebug console.log function will
// be ignored (instead of crashing) in Internet Explorer.
// Also see Firebug Lite if you want logging
// to actually do something on IE.
// http://getfirebug.com/firebuglite
 
try { console.log("Loading script"); 
} catch(e) { console = { log: function() {} }; }