// console.log('test');
// // window.alert("hallokes");
// // alert("test"); 


// for (i=0; i < 10; i++){
//     console.log(0);
    // for (j=1; j < 10; j++) {
    //     console.log(j);
    // }
    // console.log(i+"a");



// for (i=0; i < 20; i++){
//     console.log(i++);
// }
// let a = 2;
// let b = 3;

// console.log(a+b);

// let a = 0
// console.log(a++);
// // console.log(a)

// let line = "0";

// for (let i=0; i < 3; i++){
//     console.log(line + i);
//     for (let j=i; j < 2; j++){
//         console.log("a");
//     }
// }

// var greetings = "Hello";
// var nameUser = "Angela";


// var input = ""

// var input = prompt("write your input here: ");

// var countInput = input.length;
// var count

// alert("your sentence has " + countInput + " characters");

// if (input.length = 140) {
//     console.log("You used all your " + input.length + " charachters")
// }


// input = "JANNinneke"
// count = input.length;
// console.log(count);
// first = input.slice(0,1);
// after = input.slice(1,count).toLowerCase();
// console.log(first.toUpperCase() + after);


// function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
//         //Write your code here.
        
//         var totalWeeks = 90*52;
//         var totalMonths = 90*12;
//         var totalDays = 90*354;
//         console.log("If you live until you're 90 you have "+totalWeeks+ " weeks on this planet")
//         var leftWeeks = totalWeeks - (age*52);
//         var leftMonths = totalMonths - (age*12);
//         var leftDays = totalDays - (age*365);
//         console.log("since you're already " + age + ",you have "+ leftDays+" days, "+leftWeeks+ " weeks, " +leftMonths+" months left.");
        
        
        
//     /*************Don't change the code below**********/
//     }

// // lifeInWeeks(40);


// function calcBMI (weight,height){
//     var bodyMassIndicator = Math.round(weight/(height ** 2));
//     // console.log(bodyMassIndicator);
//     return bodyMassIndicator
// }

// console.log(calcBMI(55,1.75));

// var x = 2.3;
// var y = 2.5;
// var z = 2.7;

// console.log(Math.floor(y));

// var bmi = console.log(calcBMI(23,1.85));
// console.log("hallokes")

// console.log(bmi)


// var bracket = Math.round(Math.random()*6);

// console.log(bracket)

// function bmiCalculator (weight, height) {
    
//     let interpretation = (weight/(height * height));

    
//     if(interpretation < 18.5) {
//         console.log("Your BMI is " + interpretation+ ", so you are underweight.")
//     }
    
//     if (18.5 <= interpretation  && interpretation <= 24.9 ){
//         console.log("Your BMI is " + interpretation+ ", so you have a normal weight.")
//     }

//     if (interpretation > 24.9 ){
//         console.log("Your BMI is " +interpretation+ ", so you are overweight.")
//     }
// }

// bmiCalculator(160,1.65);

// let y = Math.floor(2.564243435345)*0.1

// console.log(y)


// function greet(word){
//     // console.log(word);
//     return "Hello " + word
// }

// let x = greet(1);

// console.log(x);


// function isLeap(year) {
    
//     /**************Don't change the code above****************/    
        
//         //Write your code here.    
    
//     var leapY = year;
    
//     if (leapY % 4 === 0) {
//         if(leapY % 100 === 0){
//             console.log(year + "is not a leap year");
//         } else{
//             if(leapY % 400 ===0){
//             console.log(year + "is a leap year");
//             } else{
//                 console.log(year + "is not a leap year");
//             };
//         };
//     } else{
//         console.log(year + "is not a leap year"); 
//     };
// }

// isLeap(2100);

// let leapY = 1998
// // var x = leapY % 
// // console.log(x);

// if (leapY % 4 === 0) {
//     if(leapY % 100 === 0){
//         if(leapY % 400 === 0){
//         console.log("Leap Year");
//         } else{
//         console.log("Not Leap Year");
//         };
//     }
//     else{
//         console.log("Leap Year");
//     }
// } else{
//     console.log("Not Leap Year"); 
// };

// let participants = ["jan","tom", "jake"];

// var x = "TOM";
// x = x.toLowerCase();
// // console.log(x);

// x1 = x.(1);
// console.log(x1);

// if (participants.includes(x)){

//     console.log(x + " welcome");
// } else{
//     console.log("Sorry maybe next time")
// };

// var x = 21 % 3
// console.log(x)


// for (let i =1; i < 101; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// var list = [];
// list.push("test",2,3,20,45);
// console.log(list);
// list.pop(2);
// console.log(list);

// var list = [];
// var count = 1

// function fizzBuzz () {
//     if(count % 3 ===0 && count % 5 ===0){
//         list.push("FizzBuzz");
//     } else if (count % 3 ===0){
//         list.push("Fizz");
//     } else if (count % 5 ===0){
//         list.push("Buzz");
//     }
//     else{
//         list.push(count);
//     }
//     console.log(list);
//     count = count+1
// }


// for (let i = 1; i < 10; i++){
//     fizzBuzz(i);
// }


// function whosPaying(names) {
    
//     /******Don't change the code above*******/
        
//         //Write your code here.
        
//     let lengthList = list.length;   
//     let random = Math.random()   
        
    
    
//     /******Don't change the code below*******/    
//     }
    
// //     var list = []'
// //     let name = prompt("inset a name")
// //     list = list.push(name);

// var list =[1,2,3,"test"];

// let lengthList = list.length;   
// console.log(lengthList);
// let random = Math.floor(Math.random()*lengthList)
// console.log(list[random]+ " needs to pay");


// let list = [];
// // let name = prompt("insert a name")

// function whosPaying(names) {
    
//     /******Don't change the code above*******/
        
//         //Write your code here.
//     console.log(list);
//     list = list.push(names);  
//     let lengthList = list.length;   
//     console.log(lengthList);
//     let random = Math.floor(Math.random()*lengthList);
//     console.log(list[random]+ " is going to pay lunch today!");
    
//     /******Don't change the code below*******/    
// }

// function myLocalScope (){
//     var myVar = 5; //LOCAL scope, if you remove var it will become GLOBAL
//     console.log(myVar);
//   }
//   myLocalScope();
//   console.log(myVar);


function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
    let lengthList = names.length;   
    let random = Math.floor(Math.random()*lengthList);
    let randomName = names[random]
    return randomName;
    
    /******Don't change the code below*******/    
    }

    

    let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    chosenName = whosPaying(names);
    console.log(chosenName + " is going to pay lunch today!")

    
    