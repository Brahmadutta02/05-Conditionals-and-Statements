//Display Large Integer

var num1 = 3;
var num2 = 6;
if(num1>num2){
    // console.log(`The larger of the ${num1} and ${num2} is ${num1}.`);
    // OR WE CAN WRITE
    console.log("The larger of the "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}else{
    // console.log(`The larger of the ${num1} and ${num2} is ${num2}.`)
    // OR WE CAN WRITE
    console.log("The larger of the "+ num1+ " and "+ num2+ " is "+ num2+ ".");
}

//Even or Odd

var num3 = 17.5;
var num4 = 42;
if(num3%2 === 0){
    console.log(num3 +"is even")
}else{
    console.log(num3 +"is odd")
}

if(num4%2 === 0){
    console.log(num4+"is even")
}else{
    console.log(num4+"id odd")
}


// if Number
var var1 = 50;
var var2 = "42F";
if(isNaN(var1)){
    console.log(var1 + " is not a valid number");
        // WE CAN WRITE BOTH
    console.log(" 50 is not a valid number");
}else{
    console.log(var1 + " is a valid number");
        // WE CAN WRITE BOTH
    console.log(" 50 is a valid number");
}

if(isNaN(var2)){
    console.log(var2 + " is not a number");
    // WE CAN WRITE BOTH
    console.log(" 42F is not a number");
}else{
    console.log(var2 + " is a number");
        // WE CAN WRITE BOTH
    console.log(" 42F is a number");
}