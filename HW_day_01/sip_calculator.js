const prompt = require('prompt-sync')();

let month_sip_amount = prompt("Enter your monthly SIP amount :");
let expected_return = prompt("Enter a Expected return :");
let time_period = prompt("Enter the time period in years :");

let total_months = time_period * 12;
let monthly_rate = expected_return / 12 / 100;
let total_invested = month_sip_amount * total_months;
let future_value = month_sip_amount * ((Math.pow(1 + monthly_rate, total_months) - 1)  / monthly_rate)  * (1 + monthly_rate);
let total_returns = future_value - total_invested;

console.log("\nTotal Invested Amount: ", total_invested.toFixed(2));
console.log("Estimated Future Value: ", future_value.toFixed(2));
console.log("Total Returns Earned: ", total_returns.toFixed(2));