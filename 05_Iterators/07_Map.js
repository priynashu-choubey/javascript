// MAP IS A CALLBACL FUNCTION
const myNums=[1,2,3,4,5,6,7,8,9,10];
/*const nums=myNums.map((num2)=>{
    return myNums+10;
})
console.log(nums); 
*/
// CHAINIG METHOD
const newNums=myNums.map((num)=>
{
    return num*10
})
.map((num)=>{
return num+1;
})
.filter((num)=> num>=40)