//Write a Function that returns 
// largest number in an Array

function Large(arr){
    let s=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>s){
            s=arr[i]
        }
    }
    return s;
}
let arr=[5,10,15,20,25,30,35,40,50,60,190];
let l=Large(arr)
console.log(l);