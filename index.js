function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function increment(n){
    return n+= 1;
}
function decrement(n){
    return n-= 1;
}
function makeInt(n){
    return parseInt(n,10);
}
console.log(makeInt("2.12")) // prints 2

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal("22.23")) // prints 22.23
console.log(preserveDecimal("test")) // prints NaN = Not a Number
