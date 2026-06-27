// Write a Function that search for element
// in an array and return the index,if the element
// is not present return -1


function SearchElement(a,e){
    for(let i=0;i<a.length;i++){
        if(a[i]==e){
            return i
        }
    }
    return -1
    
}
let a=[10,20,30,40,50,60,70,80];
let e=80
let b=SearchElement(a,e);
console.log(b);