let bill = 300;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${total}`) :
console.log('The bill is lower than 50 or higher than 300');