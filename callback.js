//function reference passed as a parameter are called callback function
//Admin-heya Admin
//employee-hi<name>
const greetAdmin=_=>'Heya,Admin';
const greetEmployee=_=>'hi employee';
const greet=(greetingfn)=>
{
  //greeting ==>a reference to a function
  const message=greetingfn();
  console.log(message);

}
//when admin log in
 greet(greetAdmin);
 greet(greetEmployee);

 //[1,2,3,4,5]
 //return array
 //iterate array
 const modifiedArray=[];
 const map=(array,modifierfn)=>
 {
   
   for(let index=0;index<array.length;index++)
   {
     const element=array[index];
     const modifiedelement=modifierfn(element);
     modifiedArray.push(modifiedelement);
   }
   return modifiedArray;
 }
map(['sampada','sanika','gayatri'],n=>n.toUpperCase);
console.log(modifiedArray);


const arry = [10,20,30,5,8,100]
function range(number){
    return number > 10;
}
console.log(arry.filter(range), 'this is inbuilt filter')
if(false)
{
function filter(array,range){
    const dummy = [];
    for(let i = 0 ; i<array.length;i++){
        if(range(array[i])){
            dummy.push(array[i])
        }
    }
    return dummy
}

const newArray = filter(arry,range)
console.log(newArray)}