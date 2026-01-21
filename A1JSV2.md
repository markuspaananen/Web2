# Notes for the task A1 for Web2 task

## Video 1 Starting Javascript
In this starter vide the Kristofer Harrison welcomes us to the beginner series.
This course is for to understand enough Javascript, so the viewer can start to
learn the various frameworks that are based on Javascript.

## Video 2 Please learn Javascript
In this video, they are trying to convince the viewer that they too need to learn Javascript.
They have a point on how everyone is using it and how everything will be eventually written in 
Javascript, because it can literally run anywere were there is a browser.

## Video 3 javascript in the server
In this video, we are told that in browser, the Javascript uses DOM to identify the objects.
however, when running the Javascript in the server side, you get packages. You can then use
these packages to build web services.

## Video 4 how to start, what you need
In this video, they are telling us what we need in terms of the software tools to start 
developing javascript. 
- VS-code code editor
    - Es-lint
    - Prettier
    - JavaScript (ES6) code snippets
- Node JS
- NVM (install node with this)

## Video 5 how to start
In this video, they are giving us video tutorial on how to install the tools, that were introduced 
on video 4. 

## Video 6 Create first app
In this video, they are demonstrating to us on how to create folder and calling it project.
Then using the console.log('Hello World') , we will output text to browser web console.
Passing parameters using subtitution are also mentioned. 

Also string literal using \` character example: console.log(`${greeting})

## Video 7 Comments in code
In this video, they are telling us about comments in Javascripts.
the single //  and multiline /* */.

Code needs to be understood without explaining.

## Video 8 more comments
Commenting code and examples on video on how to use the comments on commenting a piece of 
code out. This is handy for debugging.

## Video 9 Variables
In this video, they are telling us on how to use variables.
- var
    - function scoped
- let
    - block scoped
- const
    - block scoped
    - permanent

## Video 10 Variables 2
Demos on how to declaring variables. they are showing this in the video as in real life.
Also some talk on how variables are available based on how you declared them.

## Video 11 Strings
In this video they are talking of String concatenation (combination). Combining two different 
string with the + operator. They also talk on how to add spaces on concatenation.

## Video 12 Strings 2
In this video, it is the same as last video. But they are demoing it on real life for people that 
can't read. Makes me wonder how person that can't read could code..but that just me.
they are still talking about combining strings.

## Video 13 String
In this video they are demonstrating template literals /`. This is actually fairly less known 
stuff in javascript.

## Video 14 Strings
In this video they are still working with template literals. 
console.log(`hello there in ${temp}`);

## Video 15 Data types
In this video, they are talking about how Javascript is weakly typed language.
basics data types apply. Check type with `typeof operator` and instance `instanceof operator`.
note. Types can change.

Equality gotchas also present.

## Video 16 Data types
In this video, they are demonstrating the datatypes in the real world application.
Then he will start testing on what type the javascript will assing to the variable.
They are also some funny stuff Javascript does with the types.

## Video 17 Math in javascript
In this video, they are showing on how to use basics math aritmatics inside javascript.

## Video 18 More math in javascript
In this video, they are demoing the previous video topic on how to do math in javascript.
Seems pretty standard stuff, same as allmoist every else programming language.

## Video 19 Converting string to numbers
In this video, they are converting one datatype to another. Here they use the 
`parseInt()` and `parseFloat` and `toString()`

## Video 20 Demo converting string to numbers
In this video, they are demoing the conversions that were shown in the last video.
Mainly strings to numbers and what error messages you will get i conversion is not succesfull.

## Video 21 try catch finally
In this video, they are showing on how to catch erros with the try catch and finally keywords
in javascript. They also show on how the error messages look like.

- try monitors
- catch runs when error is got
- finally optional enclosing

## Video 22 handling errors 2
In this video, they are demoing the error handling that was shown last video.

## Video 23 Dates
In this video, they are showing how Dates work inside javascript. Personally i had had problems
with dates in javascript.
All centrall Date object, stored in millisecons since 1.1.1970
You need to construct the date object when getting date. month counts start in 0!

example: `now.getDay()`

## Video 24 demo on dates
In this video, they are showing demo of working with dates inside javascript.

note: Allways based on utc, adjust accordingly based on your timezone.

example: `console.log(now)`

## Video 25 Boolean logic
In this video, they are showing us the Boolean logic with if statements.
example: `<, >, <=, >=`
note: best to use  `===` and `!==` in comparisons allways

Ternary was new to me.

## Video 26 Demo on if statements inside javascript
In this video, they are showing us the Demo on how to use if statements and comparisons.
also allways use the `===` and `!==` comparisons. It is just good practice.
He also shows the deletion of the {} braces and how to make it work.
In the end he also shows the turnary statement way of doing comparisons.

## Video 27 Boolean logic and switch
In this video, they are showing us Boolean logic an switch. He also shows how all empty values 
can be tested as boolean and if it is empty, then boolean is false.

also combining comparisons shortcut operator. (&& or || skips the rest if first test false).
Also switch statement and how it works (`break` statement required).

## Video 28 Demo on last videos topics on boolean and switch statement
In this video, they are showing us demo on the boolean and switch statements.
Mainly he just shows the logic in the code editor, demostrating the real world use of the topics.

`Be positive` and allways put `break` to `switch` statement.
note: switch can't do less then or greater then

## Video 29 Creating arrays
In this video, they are showing us how to create arrays and what is array.
array is list, or collection of values. Each value has an index.
if you create array with the array object, then you need to set the lenght

## Video 30 demo of creating arrays
In this video, they are showing us demo on how to create arrays. As it turns out, there are many ways of creating arrys.

## Video 31 Populatin arrays
In this video, they are showing us how to add data to arrays. She also shows how to get the data
and how to get length and how the index works

## Video 32 Demo on populating the array
In this video, they are showing us demo on how to add data to array while it is being created.
example: `let arr2 = Array(2); //empty array lenght of 2`

## Video 33 Array methods
In this video, they are showing us push adding and pop removing. there are also others but we propably get them later.

## Video 34 Array methods 2
In this video, they are showing us more array methods and demoing them. Mainly she shows the 
`push` and `pop` methods.

There are the `shift` adding value. 
`concat` merges two array together

## Video 35 Loops 
In this video, they are showing us how javascript loops work. Loops loop the code.
- while
- for
- for ... of

## Video 36 Demo loops in javascript
In this video, they are showing us demo on how to actually use loops in javascript.
he goes with the while, for and for ... of loops and shows them.

He also higlights in the previous video the importance to remember to add breaking statement on 
loops, so it will not be infinite.

he also higlights the snippets addon, and it seems handy.

## Video 37 Functions
In this video, they are showing us what are functions in javascript. Functions allow you to 
made repeated code made to function.

She also shows the function structure. And how to invocate the function.
You can name function any way you like exept special characters. you can also pass them 
variables but they do not need them.

Make sure to validate the data that is coming to function.

## Video 38 Functions demo usage
In this video, they are showing us the demo on javascript functions.

- function defination
- fuction invocation
- function naming
- function return

She shows many basic examples. seems pretty clear to me.

## Video 39 Arrow and anonymous functions
In this video, they are showing us fat arrow fuctions `=>`.
Changes to the `this` context.
suppors implicit return values
Must be assigned to a variable, ar immediatly used.

Fat arrow function has been really handy to me in my personal projects.

## Video 40 Demo an arrow fuctions
In this video, they are showing us demo on the fat arrow `=>` functions.
He just shows how to use the basic fat arrow function. 

example: 
` const add = (a, b) => a + b;`
`console.log(add(1, 2));`

returns: 3 

## Video 41 Javascript object notation
In this video, they are showing us how javasript is used on many places nowdays. This goes to 
JSON format, which helps to organise the data.

example: ` JSON.stringify(JSON)` and ` JSON.parse(text)`

## Video 42 Demo object notation JSON
In this video, they are showing us demo on how to really use the JSON on real world.
She is using the same functions shown in the last video.

She has chosen the most used basic book to demo this, the books latter half is really good but 
it has a slow start.
The json functions are really handy in javascript.

## Video 43 objects in javascript
In this video, they are showing us javascript objects. Video starts on really basics stuff 
like what is the object in javascript. i quess it is good to tell since this is the beginner course,
and i have gotten many good hints allready on previous videous.

## Video 44 objects demoing in javascript
In this video, they are showing us demo on objecs, the theory was told in the last video, and 
now she is showing how to actually use them in code.

## Video 45 Promises on long running operations
In this video, they are showing us asyng calls and promises. problem is the tread locking in 
long processes with javascript. the promises solves this with by promising to return 
value. 
In javascript has build in way to build promise object.

## Video 46 demo on the promises in javascript
In this video, they are showing us demo on how to use promises to manage long running operations.
He uses fairly simple promise example, it is very easy to understand what is happenig.

## Video 47 async/await
In this video, they are showing us this new async. Make async code to look sync code visually. 
This should make it easier to write code, and "get it".

## Video 48 demo on async/await
In this video, they are showing us demo on the previous video topic on the async. 

## Video 49 package management
In this video, they are showing us on javascript package management and what are packages.
package is bundle of reusable code and/or assets.

Even your app is a package.

can be found in npm.

example: `npm install package`

## Video 50 Demo on package management
In this video, they are showing us how to actually use the packages. How to install 
and use the packages.
Also the different ways to install dev packages and use packages.

## Video 51 Next steps
In this video, they are showing us the next steps to learning JavaScript. 

there are links and stuff to learn more.


