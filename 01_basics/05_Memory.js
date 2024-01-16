//STACK

let myyoutubeName="Priyanshu Choubey";
let anotherName="Shenky";
anotherName=myyoutubeName;
console.log(anotherName);
console.log(anotherName);

//HEAP

let userOne={
    email:"priyanshu@google.in",
    upi: "shenks@apl"
};
let userTwo={
    email:"choubey@google.in",
    upi: "choubey@apl"
};
userTwo=userOne;
console.log(userOne.email);
console.log(userTwo.email);