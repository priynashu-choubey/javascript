//const coding =['js','java','ruby','python','cpp'];

// Method ONE
/*
 coding.forEach( (val)=>{
    console.log(val[3]);
}
)
*/
//Method TWO
/*
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);
*/
//Method THREE
/*
 coding.forEach(   (item,index,arr)=>{
console.log(item,index,arr);
}) 
*/
 const myCoding = [
    {
        languageName:"javascipt",
        labguageFileName:"JS"
    },
    {
        languageName:"java",
        labguageFileName:"java"
    },
    {
        languageName:"Python",
        labguageFileName:"Py"
    }
];
myCoding.forEach((item)=>{
    console.log(item.labguageFileName);
})