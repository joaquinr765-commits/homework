let monthlyIncome = 2000;
let rentCost = 650;
let foodCost = 450;
let transportCost = 60;
let funBudget = 200;
let totalExpenses = rentCost + foodCost + transportCost + funBudget;
let moneyLeft = monthlyIncome - totalExpenses;
console.log(`
    ----Simply Budget----
    Monthly Income: $${monthlyIncome}
    Total Expenses: $${totalExpenses}
    Money Left: $${moneyLeft}
    `)

foodCost += 100;
console.log(`After expending more on food =`, foodCost);
totalExpenses = rentCost + foodCost + transportCost + funBudget;
moneyLeft = monthlyIncome - totalExpenses;
console.log(`
    ----Simply Budget----
    Monthly Income: $${monthlyIncome}
    Total Expenses: $${totalExpenses}
    Money Left: $${moneyLeft}
    `)





