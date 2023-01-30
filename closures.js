//clasures program1 1)
// counter(initialValue)
// {
//    const increment=()=>
//    {
//     initialValue++;
//     return initialValue;
//    }
//    return increment;
// } 
// counter10=counter(10);//counter10 is the reference
// console.log(counter10());

//another method 2)
// const counter=(initialvalue)=>()=>initialvalue++;
// counter10=counter(10);
// counter10();

//another method 3)
// const square=(value)=>
// {
//    const squareNumber=()=>
//    {
//       value=value**2;
//       return value;
//    }
//    return squareNumber;
// }
// square10=square(10);
// console.log(square10());


//another method 4)
// const square=(value)=>()=>value**2;
// square10=square(10);
// square10();


//primenumber assignment
// const arr=[2,3,5,7,11,13,17,19];
// const prime=(arr,index)=>()=>arr[index++];
// const calculateprime=prime(arr,2);
// calculateprime();


const arr=[2,3,5,7,11,13,17,19];
const prime=(arr,index)=>()=>arr[index++];
const calculateprime=prime(arr,2);
calculateprime();
calculateprime();
