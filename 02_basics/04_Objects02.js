/*  --01--
const tinderUser= new Object();
const tinderUser1={}
tinderUser1.id="123abc"
tinderUser1.name="Sam"
tinderUser1.isLoggedIn=false
console.log(tinderUser1);
 */

/* 
--02--
const regularUser={
    email:"sambahadur@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Sam",
            lastname:"Bahadur"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); */

/*   --03-- Concept of optional Chainig

const firstname=regularUser?.fullname?.userfullname?.firstname;
console.log(firstname);
 //line #19 and #23 are same except #23 is equipped with optionl chaining
 */

/* --04-- Combining Objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 ={obj1,obj2};
console.log(obj3);                     //Method 01
obj3=Object.assign(obj1,obj2);         //Method 02
console.log(obj3);
obj3=Object.assign({},obj1,obj2);      //Method 03
console.log(obj3); 
const obj4={...obj1,...obj2};          //Method 04
console.log(obj3);

*********************************************************** */

/*  --05--
*NOTE* - when data comes from Databses it always comes in the form of Arrays of Objects
 const User=[
{
id:"1",
email:"p@gmail.com"
},
{
    id:"2",
    email:"r@gmail.com"
},
{
    id:"3",
    email:"i@gmail.com"
}
]
    //This is called Array of Objects
console.log(User[1].email.length);    //Accesing array of Objects
console.log(User[1].email);
 */

/* --06-- Object. Func

const newTinderUser = {};
newTinderUser.id = "123abc";
newTinderUser.name = "Sam";
newTinderUser.isLoggedIn = false;
console.log(newTinderUser);
console.log(Object.keys(newTinderUser));
console.log(Object.values(newTinderUser));
console.log(Object.entries(newTinderUser));

//Loop through करते समय अगर value exist नहीं करती then
console.log(newTinderUser.hasOwnProperty(newTinderUser.isLoggedIn)); */

/* Destructuring of Objects

// 1st

const course = {
  coursename: "js in hindi",
  price: "1000",
  courseInstructor: "hitesh",
};
console.log(course.courseInstructor);

//2nd

const { courseInstructor: instructor } = course;
console.log(instructor); 

Object destructuring in JavaScript is a concise way to extract values
from objects and assign them to variables. Instead of accessing object
properties one by one using dot notation or bracket notation, destructuring
 allows you to unpack multiple properties into distinct variables
in a single statement. This simplifies code and makes it more readable. 

//Here's a simple example:JavaScript

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Destructuring the object
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30

In this example, the variables firstName, lastName, and age are created and
initialized with the corresponding values from the person object. This zavoids 
repetitive code and makes accessing object properties more efficient.
Destructuring can also be used to rename properties during extraction, set default values if a property is missing, and extract properties from nested objects. It is a powerful feature that improves code maintainability and
readability.
 */

/* JSON
{
   " name ":"Priyanshu",
    "course": "JS",
    "goal": "React"
} 
    */
