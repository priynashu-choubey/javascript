const mysym1= Symbol("unique");
//object declaration //symbol declaration
const jsuser={
   name:"priyanshu",
   "full name":"peiyanshu choubey",
   age:"18",
   location:"jablpur",
   email:"priyanshuchoubey@gmail.com",
   isloggedin:false,
   lastloggedin:["monday","suturday"],
   [mysym1]:"key1"}
jsuser.greeting=function(){
   console.log("Hello JSUser");
}
jsuser.greetingtwo=function(){
  console.log(`Hello JS User ${this.name}`); 
}
//object access
console.log(jsuser.email);  // . notation
console.log(jsuser["email"]);  // [] notation
console.log(typeof jsuser[mysym1]);
jsuser.greeting();
jsuser.greetingtwo();
console.log(jsuser.greeting);  //Funtion ka *reference* aaya hai function execute ni hua hai.



/*****************************************************************/
const mySym=Symbol("Key1"); 
 const JsUser2={
 [mySym]:"myKey1"
 }
 console.log(JsUser2[mySym]);
 console.log(typeof JsUser2[mySym]);
 console.log(JsUser2[mySym]);
 console.log(typeof JsUser2.mySym);
console.log(typeof JsUser2["mySym"]);
console.log(`${JsUser2.mySym}`);
// console.log(jsuser);
// console.log(JsUser2);

//Changing the Value of Keys in any object
jsuser.email="ChoubeyJi@gmail.com";
console.log(jsuser);

// Object.freeze()
Object.freeze(jsuser.email);       
jsuser.email="Choubey@email.com";
console.log(jsuser.email);
