// Step 1: Create and Initialize Variables
let startupName = "JustCozyJerry"; // This is the name of my startup
let initialCapital = 10000; // This is the initial capital I have for my startup
let monthlyRevenue = 5000; // This is the monthly revenue in dollars that I will generate
let monthlyExpenses = 2500; // This is the monthly expenses in dollars that I will incur
//Step 2: Calculate Business Metrics
let netCashFlow = monthlyRevenue - monthlyExpenses; // This is the net cash flow per month
let currentBalance = initialCapital + netCashFlow; // This is the current balance after one month
let isProfitable = netCashFlow > 0; // Profitability will be true if net cash flow is positive
//Step 3: Print to Console
console.log("Startup Name: " + startupName);
console.log("Net Montly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Is the business profitable? " + isProfitable);