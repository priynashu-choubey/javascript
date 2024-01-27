/* // --01--
const tinderUser= new Object();
const tinderUser1={}
tinderUser1.id="123abc"
tinderUser1.name="Sam"
tinderUser1.isLoggedIn=false
console.log(tinderUser1);

//--02--
const regularUser={
    email:"sambahadur@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Sam",
            lastname:"Bahadur"
        }
    }
}  
console.log(regularUser.fullname.userfullname.firstname);

//  --03-- Concept of optional Chainig 

const firstname=regularUser?.fullname?.userfullname?.firstname;
console.log(firstname);
 //line #19 and #23 are same except #23 is equipped with optionl chaining
 */

//--04-- Combining Objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
/* const obj3={obj1,obj2}
//console.log(obj3);   */               // Method 01
/* obj3=Object.assign(obj1,obj2);       //Method 02
console.log(obj3); */
obj3=Object.assign({},obj1,obj2);       //Method 03
console.log(obj3); 