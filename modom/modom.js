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
    var one = function(_element = 'body'){
        return document.querySelector(_element);
    }

    var all = function(_element = 'body'){
        return document.querySelectorAll(_element);
    }

    var remove = function(_element = 'body'){
         one(_element).remove();
    }

    var addClass = function(_element = '.sub-header', _elementClass = 'text-center'){
            return one(_element).classList.add(_elementClass);
    }

    var removeClass = function(_element = '.sub-header', _elementClass = 'well'){
            return one(_element).classList.remove(_elementClass);
    }
    var hasClass = function(_element, classMatch){
        return one(_element).classList.contains(classMatch);
    }

    var getAttr = function(_element, attr){
        return one(_element).getAttribute(attr);
    }

    var setAttr = function(element, attr, attrValue){
        return one(element).setAttribute(attr, attrValue);
    }

    var setHTML = function(element, innerValue){
        return one(element).innerHTML = innerValue;
    }

    var getHTML = function(element){
        return one(element).innerHTML;
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
    };

}())
