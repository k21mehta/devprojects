
// //number of character count in tweet
// var tweet = prompt("Enter tweet");
// var tweetCount = tweet.length;

// //use console.log to see in the console :) 
// alert("You have written " + tweetCount + " and now you have " + (140-tweetCount) + " remaining chracters");

// //cut tweet down to 140 characters
// //ensures that it is 0 to 140 (140 chracters)
// var tweetSliced = tweet.slice(0,140)


// //Can reduce the above to one simple line: 
// alert(prompt("Enter Tweet:").slice(0,14));


// //Want to say hello with Captial first letter

// var name = prompt("What's your name?");

// alert("Hi " + name.slice(0,1).toUpperCase() + name.slice(1,name.length));


//Parameters & Arguement

// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//   //With Parameters and life in ages 

//   function lifeInWeeks(age) {
    
//     //Write your code here.
//     var yearsLeftinDays = (90-age)*365;
//     var yearsLeftinWeeks = (90-age)*52;
//     var yearsLeftinMonths = (90-age)*12;

//     console.log("You have " + yearsLeftinDays + " days, " + yearsLeftinWeeks + " weeks, and " + yearsLeftinMonths + " months left.");
// }


// //bmi Calculator

// function bmiCalculator (weight, height) {
//     var bmi = weight/Math.pow(height, 2);
//     bmi.toFixed(1);
//     if (bmi < 18.5 ){
//         console.log("qe");
//         return "Your BMI is " + bmi + ", so you are underweight.";
//     }
//     else if (bmi >= 18.5 && bmi <= 24.9){
//         console.log("qed");
//           return "Your BMI is " + bmi + ", so you have a normal weight.";
//     }
//     else {
//         console.log("reaching here");
//           return "Your BMI is " + bmi + ", so you are overweight.";
//     }
//   }



//fuzzbuzz

var output = [];
var i = 1; 

function fizzBizz(){

    //if statments order matters
    //need first if statement to check both conditions before preceeding below
    if(i % 5 == 0 && i % 3 ==0){
        output.push("FizzBuzz");
    }
    else if (i % 3 == 0){
        output.push("Fizz");
    }
    else if(i % 5 == 0){
        output.push("Buzz");
    }
    else{
        output.push(i);
    }
    i ++; 
    return output;
}


//fibinoaci generator

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var startingOne = 0;
        var startingTwo = 1;
        var array = [startingOne, startingTwo];
        var sum = 0; 
             
                    
                 if (n === 1){
                     return [startingOne];
                        }
                    else if (n === 2){
                    return  array;
                     }
                 else if (n > 2){
                    for(var i = 2; i < n; i++){
                   
                    sum = array[i-1] + array[i-2];
                    //return is always last
                     array.push(sum);
                    }   
                    return array;
                }
            }
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    
    
    