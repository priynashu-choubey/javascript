//******************   PUSH FUNCTION ****************************/
 const marvel_h=["Thor","Ironman","Captain","Spidy"];
// console.log("Marvel:",marvel_h);
 const dc_h=["Superman","Flash","Batman"];
// console.log("DC: ",dc_h);
// console.log("After Push: ",marvel_h.push(dc_h));
// const allHeros=marvel_h.concat(dc_h);
// console.log("After push",marvel_h);
// console.log("allHeros: ",allHeros);


//***************************NOTES*********************************/
//Concat and push has a diference 
//Concat adds array and gives the outpu whereas the 
//Push func gives the length of Array 
//****************************************************************/


//***************Spread operator (...) ***************************/
// const assembledAVG=[...marvel_h,...dc_h]
// console.log(assembledAVG);


// //******** FLAT FUNCTION   ************************************/
// const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log("anotherArray Brfore: ",anotherArray);
// const realArr=anotherArray.flat(Infinity) 
// // the number inside flat function describes the level of flatting
// console.log("another Array After: ",anotherArray);
// console.log("This is reakArr: ",realArr);

//****************** isArray Function *****************************/
console.log(Array.isArray("Prince"));

// Used to sk questions

//*************** Array.from ************************************/
console.log(Array.from("Prince"));
console.log(Array.from({name:"nitesh"}));
// Used to make string as a separate Array

//*********************    Array.of Method      *******************/
let s1=100,s2=200,s3=300,s4=400;
const arrof=Array.of(s1,s2,s3,s4);
console.log("Array of ",arrof);
console.log(Array.of(s1,s2,s3,s4)) ;