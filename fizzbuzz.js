// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    for(let i =1; i<100; i++){
        let str = "";
        if(i%3===0){
            str+="Fizz"
        }
        if(i%5===0){
            str+="Buzz"
        }
        console.log(str === "" ? i : str)
    }
}

// Now, we run the main function:
fizzbuzz();

