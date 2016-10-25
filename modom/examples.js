// Your test code examples go here. Make sure you console.log() results.
//<-----------Examples to Test--------------->
//<------------------------------------------>
// console.log(md)

//<-----------Begin test---------------> Complete
// one(): Find one matching element using any CSS selector
console.log(md.one('body'));
md.one('body');

//<-----------End of test--------------->
//<------------------------------------->


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

//<-----------Adventure Mode Below--------------->
//<---------------------------------------------->


//<-----------Begin test--------------->
// Add an ajax() function that fetches API data.
/*
~ Search API data via url
~ Convert API data to json
~ Convert json to function...
*/
console.log(md.ajax('http://swapi.co/api/'));

//<-----------End of test--------------->
//<------------------------------------->
//<-----------Begin test--------------->
// Add a getProp() function that gets an element's object property value.
/*

*/

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// Add a setProp() function that sets an element's object property value.
/*

*/

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// Add a getValue() function that sets an form field's value attribute.
/*

*/

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// Add a setValue() function that sets an form field's value attribute.
/*

*/

//<-----------End of test--------------->
//<------------------------------------->
