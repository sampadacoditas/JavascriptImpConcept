const people=[
    {name:"sabha",age:20},
    {name:"aniruddha",age:50},
{name:"sanyukta",age:30}];

const names=people.map(({name})=>({name}));
const aggee=people.map(({age})=>({age}));


//// map function and destructuring
const array = [[1,2],[1,3,4],[3,5]];
const map=array.map(([item])=>item);
console.log(map);



//useful methods in string
//trim()
//toUpperCase()
//toLowerCase()
//slice()

//trim()
let firstName="   harshit   ";
console.log(firstName.length);
firstName=firstName.trim();
console.log(firstName.length);

//toUpperCase()
firstName=firstName.toUpperCase();
console.log(firstName);

//toLowerCase()
firstName=firstName.toLowerCase();
console.log( firstName);
 
//slice()
//start
//end
firstName=firstName.slice(0,5);
console.log(firstName);