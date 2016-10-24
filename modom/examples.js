// Your test code examples go here. Make sure you console.log() results.
//<-----------Examples to Test--------------->
//<------------------------------------------>
// console.log(md)

//<-----------Begin test---------------> Complete
// one(): Find one matching element using any CSS selector
// console.log(md.one('body'));
// console.log(md.one('div'));
// console.log(md.one('button'));
// console.log(md.one());

// md.one('body');
// md.one('div');
// md.one('button');
// md.one(); // --> Submits empty argument to function...

//<-----------End of test--------------->
//<------------------------------------->


//<-----------Begin test---------------> Complete
// all(): Find all matching elements using any CSS selector
// console.log(md.all('div'));
// console.log(md.all('p'));
// console.log(md.all('li'));
// console.log(md.all());

// md.all('div');
// md.all('p');
// md.all('li');
// md.all();

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> Complete
// remove(): Remove an element
// console.log(md.remove('body'));

// md.remove('body')

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> (Pending Further Review)
// addClass(): Add a CSS class to an element
/*
~ Search for element
~ Add class to element
*/
// console.log(md.addClass('.sub-header', 'text-center'));
// md.addClass('.sub-header', 'text-center');

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> (Pending Further Review)
// removeClass(): Remove a CSS class from an element
/*
~ Search for element
~ Remove class to element
*/
// console.log(md.removeClass('.sub-header', 'text-center'));
// md.removeClass('.sub-header', 'text-center');

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test---------------> (Pending Further Review)
// hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
/*
~ Search for element
~ Check to see if element has class
~ Check to see if element contains the class that is passed in the argument
~ Need (element, classMatch)
*/
// console.log(md.hasClass('h2', '.sub-header'));

//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// getAttr(): Get an HTML attribute from an element
/*
~ Search for element
~ Find to HTML attribute of the element
~ Need (element,indexElement, indexAttribute)
*/
console.log(md.getAttr('.placeholder > h2', 0, 0));
// md.getAttr('.placeholder > h2');

// console.dir(document.querySelectorAll('.page-header')[0].attributes[0].value)
//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// setAttr(): Set an HTML attribute on an element
//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// setHTML(): Set the innerHTML of an element
//<-----------End of test--------------->
//<------------------------------------->

//<-----------Begin test--------------->
// getHTML(): Get the innerHTML of an element
//<-----------End of test--------------->
//<------------------------------------->
