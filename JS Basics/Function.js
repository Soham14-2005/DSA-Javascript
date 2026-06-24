function printHelloWorld() {
    console.log("Hello World")
}
printHelloWorld();

function greet(name){
    console.log("Namaste, "+name);    
}
let x="Virat Kohli";
greet(x);

function Operation(a,b){
    let add=a+b;
    let mul=a*b;
    console.log("Addition is "+add);
    console.log("Multiplication is "+mul);
}
let w=7;
let y=8;
Operation(w,y)

function Square(s){
    let sq=s*s;
    return sq;
}

let value=Square(10)
console.log("Sqaure is "+value);
