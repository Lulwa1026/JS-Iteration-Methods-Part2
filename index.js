// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
// function incomeArray2(transactions){
//       return transactions.filter(function (num){
//               return num[0]==='income';
//        })
// }
// console.log(incomeArray2(transactions))
const incomeArray = transactions.filter(function(incm){
       return incm [0] === "income";
});
console.log(incomeArray);

const expenseArray = transactions.filter(function(xpns){
       return xpns [0] === "expense";
});
console.log(expenseArray);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/

// const totalIncm = transactions.reduce(function(math){
//        return math 
// });

totalIncm = incomeArray.reduce(function(total, incm){
       return total + incm[1]
} ,0);
console.log(totalIncm);

totalxpns = expenseArray.reduce(function(total, xpns){
       return total + xpns[1]
} ,0);
console.log(totalxpns);


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/
// function theTotal(){
//        const net = totalIncm - totalxpns;
//        return net;
// };

const net = totalIncm - totalxpns;
console.log(net);

const task6 = transactions.filter(function(six){
       return six [1] >= 500;
});
console.log(task6);
// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
