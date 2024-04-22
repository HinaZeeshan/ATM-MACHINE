#! /usr/bin/env node
import inquirer from "inquirer";
// in dollar
let myBalance = 10000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.q1 == mypin) {
    console.log("welcome to yours account");
    console.log("correct pin code..!!!");
    let operationAns = await inquirer.prompt([
        { name: "Account Type",
            message: "please select your account...",
            type: "list",
            choices: ["Current Account",
                "Saving Account",
            ]
        },
        {
            name: "operation",
            message: "please select option...",
            type: "list",
            choices: ["withdraw",
                "fastCash",
            ]
        },
    ]);
    // console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: " enter your amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) 
        // = ,-=. +=
        {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is :" + myBalance);
        }
        else {
            console.log(" Insufficient Balance ");
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([{
                name: "fastCash",
                message: " enter your amount",
                type: "list",
                choices: [
                    "1000",
                    "5000",
                    "7000"
                ]
            }]);
        if (myBalance >= fastCashAmount.fastCash) 
        // = ,-=. +=
        {
            myBalance -= fastCashAmount.fastCash;
        }
        console.log("your balance is :" + myBalance);
    }
}
