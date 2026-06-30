//Write a Function that returns 
// largest number in an Array
let v=0
function Large(arr){
    let s=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>s){
            s=arr[i]
            v=i
        }
    }
    return s;
}
let arr=[5,10,15,20,25,30,35,40,50,60,190];
let l=Large(arr)
console.log(l);
console.log(v);