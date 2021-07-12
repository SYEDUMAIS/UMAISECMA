function callme(){
    console.log("thanks for call!");
}

callme();
function newcall(){
    console.log(a=2+3);
}

newcall();

function expression(){
    var y=10;
    var z=30;
    var x=y+z;
    console.log(x);
}

expression();

function addme(num1, num2){
    var sum= num1+num2;
    console.log(sum);
}
addme(10,12);
addme(45,56);

function addtwo(num1, num2){
    var sum= num1+num2;
    console.log("sum of "+num1+" and " +num2+" is equal to"+sum);
}
addtwo(10,12);
addtwo(45,56);

// Litrals ``
function addother(num1, num2){
    var sum= num1+num2;
    console.log(`sum of ${num1} and ${num2} is equal to ${sum}`);
}
addother(12,13);