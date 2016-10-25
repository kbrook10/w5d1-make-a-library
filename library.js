//Class Lecture 10.24.2016 ---> Functional Programming

// //Task Item (): Ways to create functions...
// //<---------------------------------------------------------->
// //(1) option to create a function
// function driveCar(){
// }
// //(2) option to create a function...Example of using anonymous function as callback...This is an 'Higher Order' function
// var driveCar = function(doStuff, secretMessage){
//     // console.log(doStuff); // --> This returns the function
//     // console.log(doStuff()); // --> This executes code and runs script
//     var stuffMessage = doStuff(); // --> This doStuff is stand alone and has no arguments
//     // alert(stuffMessage)
//
//     return function(){
//         return 'Hello From Your Car' + stuffMessage;
//     }
// }
// //Pass in parameters into anonymous function...
// // driveCar('Hello','World',1,2,3,function(){},1,true,'Ha')
// // var greeting = driveCar(() => 'Zoom!'; //--> Example of '=>' arrow functions
// // })
// var greeting = driveCar(function(){ return 'Zoom!'; //--> Example of '=>' arrow functions
// })
//
// console.log(greeting());
// var msg = greeting();
// document.body.innerHTML = greeting();
//
// //If you have a function inside another function...
// function makeFood(){
//     var lettuce = true;
//     function makeTacos(){
//         var cheese = true;
//         console.log(lettuce)
//     }
//     console.log(cheese)
// }
//
// if (true === true) {
//     let city = 'Indianapolis'; // --> 'let' scopes itself inside the curly bracket
// }
//
// if (true === true) {
//     var city = 'Indianapolis';
// }
// for (let i = 0;)
//
// console.log(i)

//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Making A library...LoDash
//<---------------------------------------------------------->
(function(){
    'use strict';
    var one = function (selector){
        return document.querySelector(selector)
    }
    var getAttr = function(selector, attribute){
        return one(select.getAttribute(attribute))
    }
    var getProp = function('.navbar', property){
        return one('.navbar')[property] //--> Remember this for HW
    }
    var capitalizeFirst = function(word){
        return word.charAt(0).toUpperCase() + word.substring(1);
    }
    var capitalizeAll = function(words){
        return words.split(' ').map(capitalizeFirst).join(' ');
    }
    var padLeft = function(word, char = '0', length = 2){ //--> The 'char = 0' and the 'length = 2' are default parameters
        // padLeft('1', '0', 2) => 01
        // padLeft('1', '0', 3)
        // if (word.length < length) {
        //     // console.log(word.length);
        //     word = char.repeat(length - word.length)  + word;
        // }
        //Expression to provide default if undefined...This works well with default parameters
        // char = char || '0'
        // length = length || 2


        return char.repeat(length - word.length) + word;
        // return word
    }
    window.dog = {
        name: 'Alfy',
        capitalizeFirst: capitalizeFirst,  // --> GlobalName: Name in scope;
        capitalizeAll: capitalizeAll,
        padLeft: padLeft,
        makeItGreen: function(){
            document.body.style.backgroundColor = 'lightgreen'
        },
        one: one,
        getAttr: getAttr,
        getProp: getProp,
    } // --> This sets the functions
}())


//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item ():
//<---------------------------------------------------------->




//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item ():
//<---------------------------------------------------------->




//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item ():
//<---------------------------------------------------------->




//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->
