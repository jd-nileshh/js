// Arrays

const myArr = [0, 1, 2, 3, 4, 5 , true, "Nilesh"]; 
// can contain different elements as well i.e mix of datatypes is allowed

/*
javaScript array copy operation create shallow copies instead of deep copies 
shallow => same reference is shared i.e change in copy changes original as well
deep => do not share same reference i.e change in copy will not affect the original
*/

const myArr2 = new Array(1,2,3,4);

myArr2.push(6);
myArr2.push(7);
// push inserts at the end and "unshift" inserts at the beginning which is not good for lengthy arrays
//as the indexes of all the element needs to be shifted

// myArr2.unshift(9);
// console.log(myArr2);

// myArr2.pop();
// console.log(myArr2);

myArr2.shift(); // no argument is passed in shift
// shift removes the very first zero index element



/* 
methods for array

includes
indexof

*/

const newArray = myArr2.join();
// console.log(myArr2);
// console.log(newArray);


//. slice , splice

const myn1 = myArr2.slice(1,3);
console.log("A" , myArr2) //slice does not manipulate the original array
console.log(myn1);

const myn2 = myArr2.splice(1,3);
console.log("B",myArr2) // we can see that using splice manipulated the original array and deleted the elements occuring between the mentioned indexes , both indexes included and creating a cut-out of those elements in the form of new array , while original getting manipulated 
console.log(myn2)


