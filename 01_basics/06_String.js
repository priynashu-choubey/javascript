const gameName= new String ('Hitesh Sir');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));
console.log(gameName.charCodeAt('4'));
const newString=gameName.substring(0,4);
console.log(newString);
console.log(gameName.substring(2,6));
const newName=gameName.slice(-8,4)
console.log(newName);
const url="https://Priyanshu%20choubey.in"
console.log(url.replace('%20','_'));
console.log(url.includes('_'));
console.log(gameName.valueOf());
console.log(gameName.toString(5));