var cl = console.log;
var x = 10; // type : number
// x = true;
// Here, it gives an error that type boolean is not assignable to type 'number'.
// that means we cannot store the value of datatype other than 'number' in x variable.
var y; // type : any
// when we declare a declaration but not assign value to it, then it consider a type of 'any'.
// any >> we can store any type of values in that declaration.
y = 10;
y = false;
y = "Hello typescript";
var person = {
    fname: 'John',
    lname: 'Doe',
    age: 35,
    skills: ["HTML5", "CSS3", "javaScript"]
};
// person.profile = "Software developer";
// delete person.age;
// It gives error if any key is extra or less.
// we cannot add or delete the key from object, if we do then it gives an error.
var skills;
skills = ["HTML5", "CSS3", "javaScript"];
var p1 = {
    fname: 'Tony',
    lname: 'Stark',
    age: 55,
    profile: 'Software Developer',
    Child: {
        fname: 'Smith',
        lname: 'Stark',
        age: 35,
        profile: 'Full Stack Developer'
    }
};
cl(p1);
function add(n1, n2, showRes, phrase) {
    // if(showRes === true){
    //     cl(`${phrase} ${n1 + n2}`);
    // }else{
    //     return (`${phrase} ${n1 + n2}`);
    // }
    return (showRes === true) ? cl("".concat(phrase, " ").concat(n1 + n2)) : ("".concat(phrase, " ").concat(n1 + n2));
}
add(20, 30, true, 'The result is');
var res = add(50, 50, false, 'The result is');
cl(res);
// ==================== Ex. 1) ==================
var a = true;
// a = 10;
// a = 'Hello typescript'
a = false;
var b = 'Hello';
// b = 5;
// b = true;
b = '25';
var c = 15;
// c = true;
// let c = 'Hello typescript';
c = 20;
var d; // type 'any
d = 12;
d = false;
d = '100';
var bike;
bike = {
    color: 'black',
    milg: 7,
    engineType: 'Two stroke'
};
var std1 = {
    fname: 'Jen',
    lname: 'Doe',
    age: 22,
    canDrive: true
};
function sub(n1, n2, showRes, phrase) {
    // if(showRes === true){
    //     cl(`${phrase} ${n1 - n2}`);
    // }else{
    //     return (`${phrase} ${n1 - n2}`);
    // }
    return (showRes === true) ? cl("".concat(phrase, " ").concat(n1 - n2)) : ("".concat(phrase, " ").concat(n1 - n2));
}
sub(500, 100, true, 'The substraction is : ');
var res1 = sub(100, 20, false, 'The substraction is : ');
cl(res1);
// ==================== Ex. 2) ==================
var e = 5;
// e = false;
// e = 'Hello';
e = 10;
var f = false;
// f = 12;
// f = 'abc';
f = true;
var g = 'kiwi';
// g = true;
// g = 24;
g = 'mango';
var h;
h = 'false';
h = 50;
h = true;
var Mob = {
    name: 'samsung',
    price: 15000,
    color: 'white',
    specifications: {
        camera: '16megapx',
        RAM: '2gb'
    }
};
cl(Mob);
function multiply(n1, n2, showRes, phrase) {
    // if(showRes === true){
    //     cl(`${phrase} ${n1 * n2}`);
    // }else{
    //     return (`${phrase} ${n1 * n2}`);
    // }
    return (showRes === true) ? cl("".concat(phrase, " ").concat(n1 * n2)) : ("".concat(phrase, " ").concat(n1 * n2));
}
multiply(10, 10, true, 'The multiplication is : ');
var res2 = multiply(20, 30, false, 'The multiplication is : ');
cl(res2);
// ===================== Ex. 3) ===================
var k = true;
// k = 'abc';
// k = 22;
k = false;
var m = 'number';
// m = true;
// m = 4;
m = 'css';
var n = 40;
// n = false;
// n = 'car';
n = 5;
var p;
p = 'html',
    p = 22;
p = true;
p = 'false';
var sportperson = {
    fname: 'Sachin',
    lname: 'Tendulkar',
    age: 50,
    awards: ['khelratna', 'arjuna award', 'padma shri']
};
function div(n1, n2, showRes, phrase) {
    return (showRes === true) ? cl("".concat(phrase, " ").concat(n1 / n2)) : ("".concat(phrase, " ").concat(n1 / n2));
}
div(300, 5, true, 'The divison is : ');
var res3 = div(500, 25, false, 'The divison is : ');
cl(res3);
// ===================== Ex. 4) ===================
var q = 100;
// q = 'Tony';
// q = false;
q = 120;
var fname;
fname = 'Tony';
var r;
r = 30;
r = 'abc';
r = true;
var emp = {
    fname: 'Jen',
    lname: 'Doe',
    empId: 105,
    contact: 1234567890,
    Languages: ['English', 'Marathi', 'Hindi', 'Tamil'],
    address: {
        city: 'Pune',
        state: 'Maharashtra'
    }
};
cl(emp);
function sum(n1, n2, showRes, phrase) {
    return (showRes === true) ? cl("".concat(phrase, " ").concat(n1 + n2)) : ("".concat(phrase, " ").concat(n1 + n2));
}
sum(500, 400, true, 'The sum is : ');
var result = sum(300, 1000, false, 'The sum is : ');
cl(result);
// ===================== Ex. 5) ===================
var pqr = false;
// pqr = 20;
// pqr = 'true',
pqr = true;
var pizza = {
    type: 'veg',
    size: 'medium',
    slice: 8,
    price: 250,
    names: ['peppy paneer', 'margerita', 'cheese burst']
};
cl(pizza);
function substraction(n1, n2, showRes, phrase) {
    return (showRes === true) ? cl("".concat(phrase, " ").concat(n1 - n2)) : ("".concat(phrase, " ").concat(n1 - n2));
}
substraction(250, 100, true, 'The substraction is : ');
var res5 = substraction(400, 200, false, 'The substraction is : ');
cl(res5);
