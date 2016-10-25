## Synopsis

In this assignment, we have created our own custom JavaScript DOM library using **functional programming techniques**.

## Code Example

Please feel free to [access github repo](https://github.com/kbrook10/w5d1-make-a-library).

***one():*** *Created function for matching element using any CSS selector*
```
var one = function(_element = 'body'){
    return document.querySelector(_element);
}
```  
***all():*** *Created function for matching all elements using any CSS selector*
```
var all = function(_element = 'body'){
    return document.querySelectorAll(_element);
}
```
***remove():*** *Created function to remove an element*
```
var remove = function(_element = 'body'){
     one(_element).remove();
}
```
***addClass():*** *Created function to add a CSS class to an element*
```
var addClass = function(_element = '.sub-header', _elementClass = 'text-center'){
        return one(_element).classList.add(_elementClass);
}
```
***removeClass():*** *Created function to remove a CSS class from an element*
```
var removeClass = function(_element = '.sub-header', _elementClass = 'well'){
        return one(_element).classList.remove(_elementClass);
}
```
***hasClass():*** *Created function to return true if an element contains a CSS class in it's CSS attribute (see classList documentation)*
```
var hasClass = function(_element, classMatch){
    return one(_element).classList.contains(classMatch);
}
```
***getAttr():*** *Created function to get an HTML attribute from an element*
```
var getAttr = function(_element, attr){
    return one(_element).getAttribute(attr);
}
```
***setAttr():*** *Created function to set an HTML attribute on an element*
```
var setAttr = function(element, attr, attrValue){
    return one(element).setAttribute(attr, attrValue);
}
```
***setHTML():*** *Created function to set the innerHTML of an element*
```
var setHTML = function(element, innerValue){
    return one(element).innerHTML = innerValue;
}
```
***getHTML():*** *Created function to get the innerHTML of an element*
```
var getHTML = function(element){
    return one(element).innerHTML;
}
```


## Motivation

This project is to increase the understanding of **functional programming** and the various concepts that it entails...

## Installation

**Not Applicable...**

## API Reference

**Not Applicable...**

## Tests
```
//<-----------Begin test---------------> Complete
// one(): Find one matching element using any CSS selector
console.log(md.one('body'));
md.one('body');

//<-----------End of test--------------->
//<------------------------------------->
```

//<-----------Begin test---------------> Complete
// all(): Find all matching elements using any CSS selector
console.log(md.all('div'));
md.all('div');

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> Complete
// remove(): Remove an element
console.log(md.remove('thead tr :nth-child(1)'));
md.remove('thead tr :nth-child(1)')

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> (Pending Review)
// addClass(): Add a CSS class to an element
/*
~ Search for element
~ Add class to element
*/
console.log(md.addClass('.sub-header', 'text-center'));
md.addClass('.sub-header', 'text-center');

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> (Pending Further Review)
// removeClass(): Remove a CSS class from an element
/*
~ Search for element
~ Remove class to element
*/
console.log(md.removeClass('.sub-header', 'text-center'));
md.removeClass('.sub-header', 'text-center');

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> Complete
// hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
/*
~ Search for element
~ Check to see if element has class
~ Check to see if element contains the class that is passed in the argument
~ Need (element, classMatch)
*/
console.log(md.hasClass('h2', '.sub-header'));

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> Complete
// getAttr(): Get an HTML attribute from an element
/*
~ Search for element
~ Find to HTML attribute of the element
~ Need (element, attr)
*/
console.log(md.getAttr('.placeholder > img', 'width'));
md.getAttr('.placeholder > img', 'width');

// console.dir(document.querySelectorAll('.page-header')[0].attributes[0].value)
//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// setAttr(): Set an HTML attribute on an element
/*
~ Search for element
~ set HTML attribute of the element
~ Need (element, attr, attr value)
*/
console.log(md.setAttr('.placeholders > .placeholder > img','alt', 'some great story'));
md.setAttr('.placeholders > .placeholder > img','alt', 'some great story');

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// setHTML(): Set the innerHTML of an element
/*
~ Search for element
~ set the innerHTML value of the element
~ Need (element, Value)
*/
console.log(md.setHTML('.main h1', 'Tootsie Roll!'));
md.setHTML('.main h1', 'Tootsie Roll!');
//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// getHTML(): Get the innerHTML of an element
/*
~ Search for element
~ get the innerHTML value of the element
~ Need (element)
*/
console.log(md.getHTML('.placeholders > .placeholder > h4'));
md.getHTML('.placeholders > .placeholder > h4')
//<-----------End of test--------------->
//<------------------------------------->


## Contributors

You down with OPP...Yeah you know me... ~ Naughty By Nature...

## License

**None that I know of**
