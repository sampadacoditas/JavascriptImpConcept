const array=[2,3,4,5,6,790,78];

const filter=function (array,callback)
{
    let newarray=[];
   for(let index=0;index<array.length;index++)
   {
     if(callback(array[index]))
     {
        newarray.push(array[index]);
     }
   }
   return newarray;
}
filter(array,n=>n>5)
// console.log(value);
console.log(filter(array,n=>n>5));