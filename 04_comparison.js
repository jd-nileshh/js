// console.log("02" > 1);

console.log(null > 0); //false
console.log(null >= 0); 
// true because there is an issue of value conversion as we are comparing two different datatypes which is not a good practice
/* 
== checks equality with type coercion.
Comparisons like >, <, >=, <= convert values to numbers when necessary.
null converts to 0 in these numeric comparisons.



So when the image says:

"numeric comparison coercion and equality coercion follow different rules"

it simply means:

== follows one set of rules, while >, <, >=, and <= follow different rules when converting values.

*/

console.log(null == 0);//false
console.log(null <= 0);// true

console.log(null == undefined); // true


