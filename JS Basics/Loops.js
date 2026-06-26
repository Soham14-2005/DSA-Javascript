// for(let i=0;i<100;i++){
//     console.log("Hello World");
// }

// for(let i=2;i<9;i=i+2){
//     console.log("Hello World "+i);
// }

// for(let i=5;i>0;i=i-1){
//     console.log("Hello World "+i);
// }
//Unless the condition is True For loop doesn't run at all

//Infinity Loop
// for(let i=1;i>0;i++){
//     console.log("Hello World "+i);
// }

//Function+For loop
// function greet(i){
//     console.log("Namaste "+i);
// }
// for(let i=0;i<10;i++){
//     greet(i);
// }

//Array+For loop
// let arr=[10,20,30,40,50,60,70,80];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//Print even Numbers in Array
let arr=[10,20,30,40,50,60,70,80,91,101];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
    }

    //While Loop
    let i=0;
    while(i<5){
    console.log("Hello World");
    i++;
    }