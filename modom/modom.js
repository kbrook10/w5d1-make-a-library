// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

/*
Questions:
~ What am I doing
~ How am I going to do it
~ Why am I doing it that way
*/
/*
~ Search for element
~ Add class to element
*/

(function(){
    'use strict'
    var one = function(element = 'body'){
        return document.querySelector(element);
    }

    var all = function(element = 'body'){
        return document.querySelectorAll(element);
    }

    var remove = function(element = 'body'){
         return document.querySelector(element).remove();
    }

    var addClass = function(element = '.sub-header', elementClass = 'text-center'){
            return document.querySelector(element).classList.add(elementClass);
    }

    var removeClass = function(element = '.sub-header', elementClass = 'text-center'){
            return document.querySelector(element).classList.remove(elementClass);
    }
    var hasClass = function(elements, classMatch){
        var classArray = document.querySelectorAll(elements)
        classArray.forEach(function(element){
            return element.classList.contains(classMatch);
        })
    }
    var getAttr = function(elements, indexElement, indexAttribute){
        return document.querySelector(elements)[indexElement].attribute[indexAttribute].value
        }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
    };

}())
