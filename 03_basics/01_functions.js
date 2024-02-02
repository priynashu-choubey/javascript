/* function sayNyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    }
    sayNyName()
    sayNyName() */

/*   THIS IS THEORY PART
    //1.
    function addTwoNumbers(number1,number2){
        
       console.log(number1+number2);
    } 
   const result =addTwoNumbers(7,5)
   console.log("Result:",result);
   //in this type if we use this then result is storing no value that is undefined

   //2.
   function addTwoNumbers2(number1,number2){
    let result=number1+number2;
   return result;
   }
   const result2=addTwoNumbers2(7,6)
   console.log("Result:",result2);
   
   //3.
   const addition=function addTwoNumbers3(num1,num2){
      return num1+num2;
   }
   console.log(addTwoNumbers2(3,5));
    */
/*****************************************************************************************/
/*COMPANY RELATED CONCEPTS:*/ 
function loginUserMessage(username){
   return `${username} just loggedIn`
}
console.log(loginUserMessage("Priyanshu"));


/* function loginUserMessage1(username){
//1 BASIC
   if(username===undefined){
      console.log("Please Enter a userName");
   }
}
//2. Professional
   if(!username){
    console.log("Please enter username");
   return;
}
 */
//Default Value
function loginUserMessage2(userName="Sam"){     //Default value is given to fuction to avoid any error
if(!userName){
   console.log("Please Enter UserName");
 return
}
return`${userName} just loggedIn`
}
console.log(loginUserMessage2());
console.log(loginUserMessage2("Priyanshu"));