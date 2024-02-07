// starting with the This  Keyword
/* const user ={
    username:"Priyanshu",
    price:999,
    welcomeMessage:function(){
        console.log(this);
        console.log(`Hello ${this.username} welcome to the website`);    //this keyword is used here
    }
}
user.welcomeMessage()
user.username="ritesh";
user.welcomeMessage()
console.log(this);       //this here gives nothing n=but a blank object   {}

 */
/* 

function thisInvoking() {
    return console.log(this);
    
}
thisInvoking() 

when we do console.log(this); in any function then it will will give same result as given in the console
of any browser
*/


/*******               +Arrow Function+       [ ()  =>{}]    ***********/ 
//Ex. 01-
/* function one() {
    let username="Priyanshu";
    console.log(this);
    console.log(username);
    
}
one() */

//Ex. -02->
/* const chai =function(){
    const username="Priyanshu";
    console.log(username);         //normal output
    // but if
    console.log(this.username);    // undefined
}
chai() */


// Example 03 ->
/* const one=()=>                  // Arrow func Syntax
{
    console.log(username);         //normal output
// but if
console.log(this.username);    // undefined
}
one() */

//Example 04  ->
/* const addTwo=(num1,num2) =>{
return num1+num2;
}
console.log(addTwo(3,6));
addTwo() */


//Implicit Return 

/* const chai=(num1,num2)=>num1+num2
console.log(chai(3,2))
 */


/* //MDN DOCS BLOCK Line 73-89
//lets make a normal function step by step as a simplest implicit arrow function
( function(a){
    return a+1;
});
a(6);
// Or

    (ab) => {
        return ab+1;
    };

//then 
(abc) => (abc+1);

//then 
abcd=> (abcd+1);   //final  */


