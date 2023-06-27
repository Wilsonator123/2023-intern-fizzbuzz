// This is our main function
const prompt = require('prompt-sync')();




function fizzbuzz() {

    //Enter your options
    //Default, Max number, sequence, custom rules
    let options = {1: "Default Run",
    2: "Maximum Run",
    3: "Custom Sequence",
    4: "Custom Rules"}
    console.log("Welcome to fizz buzz")
    console.log("Here are your options \n 1. Default run \n 2. Maximum Number \n 3. Custom Sequence \n 4. Custom Rules")
    let choice = Number(prompt("Enter you option:"))
    while((0>=choice || choice >4) || isNaN(choice)){
        choice = prompt("Enter a valid option: ")
    }

    console.log("You have selected "+options[choice])
    let input;
    switch(choice){
        case 1:
            for(let i = 1; i< 100+1; i++)
            run(i);
            break;
        case 2:
            input = Number(prompt("Enter maximum number: "));
            while(isNaN(input)) input = Number(prompt("Enter a valid number: "))
            console.log("Your number is: " +input);
            for(let i = 1; i< input+1; i++) run(i);
            break;
        case 3:
            input = prompt("Enter your custom sequence (seperated by commas):").split(",")

            for(let num in input){
                if(!(isNaN(Number(input[num])))) run(Number(input[num]));
            }
            break;



    }

    function run(number){
        let arr = [];
        let str ="";
        if(number%3===0) arr.push("Fizz");

        if(number%13===0) arr.push("Fezz")
        if(number%7===0) arr.push("Bang")
        if(number%5===0) arr.push("Buzz")

        if(number%11===0) {
            arr = [];
            if (number % 13===0) arr.push("Fezz");
            arr.push("Bong")
        }
        if(number%17===0) arr.reverse()

        for(let x in arr) str+=arr[x];
        console.log(str==="" ? number : str)
        }

}

// Now, we run the main function:
fizzbuzz();

