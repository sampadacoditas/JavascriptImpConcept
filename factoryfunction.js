const createLoanCalculator=(rateofInterest)=>
{
    calculator=(principle,installments)=> rateofInterest*principle*installments;
    z=(newvalue)=>rateofInterest=newvalue;  
    return {z,calculator};

}
const homeLoancalculator=createLoanCalculator(8);
homeLoancalculator.z(5);
homeLoancalculator.calculator(2,5);
homeLoancalculator.z(6);
homeLoancalculator.calculator(2,5);

// const newratevalue=homeLoancalculator(10);
// newratevalue(4,7);
// homeLoancalculator(3);
// newratevalue(4,7);
// const personalLoancalcultor=createLoanCalculator(16);
// console.log(homeLoancalculator(1000,17));