// function declaration : hoisting O
function addNum(x, y){
    console.log(x+y);
}
addNum(2, 3);

// function expression : hoisiting X / first-class object
var addStr = function(x, y){
    console.log(x+y);
}
addStr("Function", "Expression");

// arrow function (simple function expression) 
var addBool = (x, y) => {
    console.log(x + y);
}
addBool(true, false);