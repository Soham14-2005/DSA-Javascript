// Write a Function that return number of
// negative numbers in an Array
let s=0;
function Negative(arr){
    let s=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            s=s+1
        }
    }
    return s;
}
let arr=[-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
let a=Negative(arr)
console.log(a);
let b=Negative(arr)
console.log(b);