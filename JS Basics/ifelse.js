function eligibility(age){
    if(age>=18){
        console.log("Eligible to Vote");   
    }
    else if(age<0){
        console.log("Invalid Age")
    }
    else{
        console.log("Not Eligible to Vote")
    }
}
eligibility(-19);

function EvenOdd(num){
    if(num%2==0){
        console.log("Even");
    }else if(num%2==1){
        console.log("Odd");
    }else{
        console.log("Invalid Input")
    }
    }
EvenOdd(37)
