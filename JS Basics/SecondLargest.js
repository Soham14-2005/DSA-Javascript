// function SecondLargest(arr){
//     let largest=arr[0]
//     let secondlargest=-Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondlargest=largest;
//             largest=arr[i];
//         }else if(arr[i]>secondlargest & arr[i]!=largest){
//             secondlargest=arr[i]
//         }
//     }
//     return secondlargest
// }
// let arr=[10, 50, 20, 80, 80]
// let v=SecondLargest(arr)
// console.log(v);
let a=[10,20,30,40,50]
let large=a[0]
let slarge=a[1]
for(let i=0;i<a.length;i++){
    if(a[i]%2==0 && a[i]>large){
        slarge=large;
        large=a[i]
    }else if(a[i]%2==0 && a[i]>slarge && a[i]!=large){
        slarge=a[i]
    }
}
console.log(slarge)