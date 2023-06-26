// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    // for(let i =1; i<100; i++){
    //     let str = "";
    //     if(i%3===0) str+="Fizz"
    //
    //     if(i%13===0) str+="Fezz"
    //
    //     if(i%5===0) str+="Buzz"
    //
    //     if(i%11===0)
    //         str=""
    //         if(i%13) str+="Fezz";
    //         str+="Bong"
    //     console.log(str === "" ? i : str)
    // }
    for(let i =1; i<100; i++){
            let arr = "";
            if(i%3===0) arr.push("Fizz");

            if(i%13===0) str+="Fezz"

            if(i%5===0) str+="Buzz"

            if(i%11===0)
                str=""
                if(i%13) str+="Fezz";
                str+="Bong"
            console.log(str === "" ? i : str)
        }
}

// Now, we run the main function:
fizzbuzz();

