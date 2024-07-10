import chalk from "chalk"
import inquirer  from "inquirer"

const currency : any = {
    USD : 1, //base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280
}

let user_answer = await inquirer.prompt(
    [
        {
            name : 'from_currency',
            message : "select the currency from convert",
            type : 'list',
            choices : [
                { name: 'USD', value: 'USD' },
                { name: 'EUR', value: 'EUR' },
                { name: 'GBP', value: 'GBP' },
                { name: 'INR', value: 'INR' },
                { name: 'PKR', value: 'PKR' }
            ]
    },
    {
        name : 'to_currency',
        message: "Select the currency to convert in to",
        type: 'list',
        choices : [
            { name: 'USD', value: 'USD' },
            { name: 'EUR', value: 'EUR' },
            { name: 'GBP', value: 'GBP' },
            { name: 'INR', value: 'INR' },
            { name: 'PKR', value: 'PKR' }
        ]
},
{
    name : 'currency_amount',
    message: "enter amount to convert",
    type: 'number',
}
    ]
);
let toCurrency = user_answer.to_currency
let fromCurrency = user_answer.from_currency
let currencyAmount = user_answer.currency_amount
console.log(fromCurrency)
console.log(toCurrency)
console.log(currencyAmount)
let fromRate = currency[fromCurrency]
let toRate = currency[toCurrency]
let convertedCurrency = (currencyAmount/fromRate) * toRate
console.log(convertedCurrency)
