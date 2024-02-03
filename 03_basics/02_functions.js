/*SHOPPING CART STYLE    [REST FUNCTION]

 //  --1.--
// This is called Rest Function (...)
function calculatePrice(...num1){                 // (...) this is called Rest Function (...) and Same as Spread Function
    return num1;
}
console.log(calculatePrice(200,300,400));         // this will give array of values using rest operator 

//--2.--
function calculatedPrice(val1,val2,...num2){
    return num2;
}
console.log(calculatedPrice(200,300,400,500,600));
// output will be [400,500,600] because 200  200 will go to val1 and 300 will go to val 2 */
/*********************************************************************************************************/


/*----------------- OBJECTS IN FUNCTION------------------*/
const user={
username:"Priyanshu",
price:"900"
}
function handleObject(anyObject){                               //Parameter
    console.log(`Username is ${anyObject.username} snd the price is ${anyObject.price}`);
}
handleObject(user)                                              //Argument will be always be object (in this case user)
//OR
handleObject({
    username:"Ram",
    price: 200
}

)

/*---------------Array in Function---------------*/
const myArray=[200,300,400,600]
function returnAnyValue(getArray){
    return getArray[2];
}
console.log(returnAnyValue(myArray));
//or
console.log(returnAnyValue([200,299,3847,7746]))
