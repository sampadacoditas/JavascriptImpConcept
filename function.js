//traditional meyhdo
//non parameterized and nonreturning function
function greet()
{
    console.log('hellooo');
}
greet;//reference of the function
greet();//invoking the function
//unless function is not executed competely it won;t get into next line
//blocking code
 function greetPerson(name)
 {
    console.log(`hi,${name}`);
 }
 greetPerson("sampada");//return undefined
 greetPerson();//undefined
 //log will return undefined implicitly
function getMessage(name)
{
    const Message="Good morning";
    return `${Message}${name}`;
    //return stop the execution of the function
    console.log("message returned");
}
const Message=getMessage("sarthak");
console.log(Message);


////functionn expression
//anonymous function
//directly we cannot used anonymous function we need to store it in const or let
const greetings=function()
{
    console.log("heloo");
} 
greetings;//holds the reference to the anonymous function
greetings();
//arrow function
//function expression
const add=(n1,n2)=>
{
    return n1+n2;
}
add(5,7);//()<=>_

//when there is just 1 parameter
//no need to have the()
//when the function has 1 line,no need  for the scope{}
//and the return statement
// const square=(n)=> 
// {
//     return n**2;
// }
const square=n=>n**2;