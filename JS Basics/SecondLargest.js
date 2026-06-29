function SecondLargest(arr){
    let largest=arr[0]
    let secondlargest=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondlargest=largest;
            largest=arr[i];
        }else if(arr[i]>secondlargest & arr[i]!=largest){
            secondlargest=arr[i]
        }
    }
    return secondlargest
}
let arr=[10, 50, 20, 80, 80]
let v=SecondLargest(arr)
console.log(v);