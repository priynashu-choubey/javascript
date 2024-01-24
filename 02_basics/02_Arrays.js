// const marvel_h=["Thor","Ironman","Captain","Spidy"];
// console.log("Marvel:",marvel_h);
// const dc_h=["Superman","Flash","Batman"];
// console.log("DC: ",dc_h);
// console.log("After Push: ",marvel_h.push(dc_h));
// const allHeros=marvel_h.concat(dc_h);
// console.log("After push",marvel_h);
// console.log("allHeros: ",allHeros);


//*****************************************************************/
//Concat and push has a diference 
//Concat adds array and gives the outpu whereas the 
//Push func gives the length of Array 



//||||||||||||||||||||| spreda operator (...) |||||||||||||||||||||||||||
const assembledAVG=[...marvel_h,...dc_h]
console.log(assembledAVG);