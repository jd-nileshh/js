const marvelHeros = ["Thor" , "IronMan" , "SpiderMan"]
const dcHeros = ["Superman" , "Batman" , "Flash"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);

// marvelHeros.concat(dcHeros);
 const allHeros = dcHeros.concat(marvelHeros)

// // console.log(marvelHeros);
// console.log(allHeros);


const all_new_heros = [...marvelHeros,...dcHeros];
// console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6],[7,[8,9]]]

const new_another_array = another_array.flat(Infinity);
// console.log(new_another_array);

console.log(Array.isArray("Nilesh"));
console.log(Array.from("Nilesh"));
console.log(Array.from({name : "Nilesh"}))  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
