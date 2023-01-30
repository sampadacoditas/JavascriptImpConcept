// const array1=[{name:"sampada",age:22},
// {name:"diya",age:89}];
// const array2=[];
// for(let index=0;index<array1.length;index++)
// {
//     array2.push(array1[index].name);
// }
// // array2=[...array1];
// console.log(`name : ${array2}`);

// // console.log(array1);

// // const info = [{name:'Omkar',age:20},{name:'sampada',age:22}]
// // const [name1,name2] = info;
// // console.log(name1,name2);

//for object element to get we need destructuring 
const array1=[{name:"sampada",age:22},
{name:"diya",age:89}];

const names=array1.map(({age})=>
{
    return {age};
});
console.log(names);
