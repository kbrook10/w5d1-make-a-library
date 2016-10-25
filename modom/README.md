## Synopsis

In this assignment, we have created our own custom JavaScript DOM library using **functional programming techniques**.

## Code Example

Please feel free to [access github repo](https://github.com/kbrook10/w5d1-make-a-library).

***one():*** *Created function for matching element using any CSS selector*
* * *
var one = function(_element = 'body'){
    return document.querySelector(_element);
}
* * *  
***all():*** *Created function for matching all elements using any CSS selector*
* * *
var all = function(_element = 'body'){
    return document.querySelectorAll(_element);
}
* * *
***remove():*** *Created function to remove an element*
* * *
var remove = function(_element = 'body'){
     one(_element).remove();
}
* * *
***addClass():*** *Created function to add a CSS class to an element*
* * *
var addClass = function(_element = '.sub-header', _elementClass = 'text-center'){
        return one(_element).classList.add(_elementClass);
}
* * *
***removeClass():*** *Created function to remove a CSS class from an element*
* * *
var removeClass = function(_element = '.sub-header', _elementClass = 'well'){
        return one(_element).classList.remove(_elementClass);
}
* * *
***hasClass():*** *Created function to return true if an element contains a CSS class in it's CSS attribute (see classList documentation)*
* * *
var hasClass = function(_element, classMatch){
    return one(_element).classList.contains(classMatch);
}
* * *
***getAttr():*** *Created function to get an HTML attribute from an element*
* * *
var getAttr = function(_element, attr){
    return one(_element).getAttribute(attr);
}
* * *
***setAttr():*** *Created function to set an HTML attribute on an element*
* * *
var setAttr = function(element, attr, attrValue){
    return one(element).setAttribute(attr, attrValue);
}
* * *
***setHTML():*** *Created function to set the innerHTML of an element*
* * *
var setHTML = function(element, innerValue){
    return one(element).innerHTML = innerValue;
}
* * *
***getHTML():*** *Created function to get the innerHTML of an element*
* * *
var getHTML = function(element){
    return one(element).innerHTML;
}
* * *


## Motivation

This project is to increase the understanding of **functional programming** and the various concepts that it entails...

## Installation

**Not Applicable...**

## API Reference

**Not Applicable...**

## Tests

Describe and show how to run the tests with code examples.

## Contributors

You down with OPP...Yeah you know me... ~ Naughty By Nature...

## License

**None that I know of**
