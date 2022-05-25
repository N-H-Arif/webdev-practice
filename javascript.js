
// in- line comment

/*multiline comment */

var myName = "Arif"
let myName1 = "Hasan"
const Lastname = "Arif"

var a;
var b= 9;
a=b
console.log(a)

// js is case sensitive

//js cannot read nested string for "".have to put \ . but '' and `` is fine for nested.

var test = " lalalalalal a \"lalalalalalaa\" lalalalalala"
console.log(test)

var test1 = ' lalalalalal a "lalalalalalaa" lalalalalala'
console.log(test1)

//strings are immutable

//array

var h = ["fafaef",44]

//nested array

var g = [["efewfef",34],["aafeaf",45]]

var f = g[0][1];
console.log(f)

g.push(["ascaca",89]);// insert last element
var f = g[2][0];
console.log(f)

var y =g.pop() // remove last eement
console.log(y)
console.log(g)

g.shift(); //remove first element
g.unshift(["avavdvav",78]);//insert first element
console.log(g)

//local variable takes precedence over global variable

// == does type conversion. === strictly does not

var a = [];
var i=0;
while(i<5)
{
    a.push(i);
    i++;
}
console.log(a)


// let works in parameter. var works in whole code

//used more for api calls

const stats = {
    max : 56,
    min : -.75
};
const half = (function(){
    return function half({ max, min}) {
        return (max+min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));

//getter setter are properties of a function

class Book {
    constructor (author){
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}











