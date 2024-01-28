const course={
    coursename:"Javascript",
    Price:"999",
    trainerName:"Hitesh Choudhary"
};
console.log(course.coursename);
console.log(course["coursename"]);
// Line 6 or 7 can be written in different types to save time as....
const{coursename}=course
console.log(coursename);
const{Price}   =course
console.log(Price);

/*---------Introduction to API------------
// XML is used for API earlier, now it uses JSON, JSON is nothing but set of objects and Arrays.
//Keys and values both are in form i=of String in Json. They are either in form of object or Arrays.

like :
Object                                         
{                                                       
    "name":"Priyanshu",
    "Class":"10th",
    "Age":"27"
}


or Array
[
{

},
{

},
{
    
}

]


1. Random Userme API
2.JSON Formater
*/