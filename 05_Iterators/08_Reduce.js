const myNum=[1,2,3];
// 01 Example 
/* const myTotal=myNum.reduce((acc,curval)=>{
    return acc+curval;

},0)
console.log(myTotal);
 */

// 02 working using console.log
/* const myTotal=myNum.reduce((acc,curval)=>{

    console.log(`Accumulator holds:${acc}, CurrVal is:${curval} `);
    return acc+curval

},0)  
console.log(myTotal);
*/

// 02 using  Arrow Function
/* 
const myTotal=myNum.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal);S 
*/


// Example
const shoppingCart=[
    {
        courseName:"Javascript",
        Price:2999
    },
    {
        courseName:"Pthon",
        Price:999
    },
    {
        courseName:"Nobile Development",
        Price:5999
    },
    {
        courseName:"Data Scientist",
        Price: 12999
    }
]
const totalPrce=shoppingCart.reduce((acc,item)=>acc+item.Price,0)
console.log(totalPrce);