/*
 ==>>Primitive (call by value)
  7 types : String, Numbner , Boolean , null, undefined , Symbol , BigInt

==>>> Non Primitve (reference type)
  Arrays , objects , functions


==>  JavaScript is dynamically typed. ✅  
   That means you don't have to declare the type of a variable, and the type can change during the program.

*/


// const id = Symbol('123');
// const id2 = Symbol('123');

// console.log(id == id2);


const heros = ["shaktimaan" , "nagraaj" , "doga"];

let myObj = {
  name : "Nilesh",
  age : 22
};

const myFunction = function(){
  console.log("Hello World");
}

myFunction();
console.log(typeof myFunction);


