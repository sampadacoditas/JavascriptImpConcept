const createLoanCalculator = (rateofInterest) => {
     calculatedrateinterest=(principal, installments)=>rateofInterest * principal * installments;
    updaterate=(newRate) => rateofInterest = newRate;
    return [updaterate,calculatedrateinterest];
}

const homeLoancalculator = createLoanCalculator(8);
const p=homeLoancalculator[1](4,6);
console.log(p);
// homeLoancalculator[0](7);
// homeLoancalculator[1](4,6);
// const referenceOfX = homeLoancalculator();
// let store = referenceOfX(10, 2);
// console.log(store);
// homeLoancalculator(10);
// store = referenceOfX(4, 5);
// console.log(store);
// homeLoancalculator(20);
// store = referenceOfX(1, 8);

//22/07/2022
//assignment of prime number
//array of prime numbers using 
const array=[2,3,5,7,11];
const arrayElementYield = (start, array)=> ()=> array[++start]
const nextElement = arrayElementYield(2, array);
nextElement();
nextElement();