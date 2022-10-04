let cl = console.log;

let x = 10; // type : number

// x = true;

// Here, it gives an error that type boolean is not assignable to type 'number'.

// that means we cannot store the value of datatype other than 'number' in x variable.

let y; // type : any

// when we declare a declaration but not assign value to it, then it consider a type of 'any'.

// any >> we can store any type of values in that declaration.

y = 10;
y = false;
y = "Hello typescript";


// we have to define the type of object, for that

// let person : {
//     fname : string,
//     lname : string,
//     age : number
// }

// person = {
//     fname : "John",
//     lname : "Doe",
//     age : 35
// }


// Interface >> defines the structure of object.

interface Iperson{
    fname : string;
    lname : string;
    age : number;
    skills : string[];
}

let person : Iperson = {
    fname : 'John',
    lname : 'Doe',
    age : 35,
    skills : ["HTML5", "CSS3", "javaScript"]
}

// person.profile = "Software developer";

// delete person.age;

// It gives error if any key is extra or less.
// we cannot add or delete the key from object, if we do then it gives an error.


let skills : string[];

skills = ["HTML5", "CSS3", "javaScript"];

// skills = ["HTML5", "CSS3", "javaScript", 123];

// Here, we cannot store the values of type other than string.
  

interface Ichild{
    fname : string;
    lname : string;
    age : number;
    profile : string;
}


interface Ip1{
    fname : string;
    lname : string;
    age : number;
    profile : string;
    Child : Ichild;
}

let p1 : Ip1 = {
    fname : 'Tony',
    lname : 'Stark',
    age : 55,
    profile : 'Software Developer',
    Child : {
        fname : 'Smith',
        lname : 'Stark',
        age : 35,
        profile : 'Full Stack Developer'
    }
}

cl(p1);


function add(n1 : number, n2 : number, showRes : boolean, phrase : string){
    // if(showRes === true){
    //     cl(`${phrase} ${n1 + n2}`);
    // }else{
    //     return (`${phrase} ${n1 + n2}`);
    // }

    return (showRes === true) ? cl(`${phrase} ${n1 + n2}`) : (`${phrase} ${n1 + n2}`); 
}

add(20, 30, true, 'The result is');

let res = add(50, 50, false, 'The result is');
cl(res);


// ==================== Ex. 1) ==================


let a = true;

// a = 10;
// a = 'Hello typescript'

a = false;

let b = 'Hello';

// b = 5;
// b = true;

b = '25';

let c = 15;

// c = true;
// let c = 'Hello typescript';

c = 20;

let d; // type 'any

d = 12;
d = false;
d = '100';


let bike : {
    color : string,
    milg : number,
    engineType : string
}

bike = {
    color : 'black',
    milg : 7,
    engineType : 'Two stroke'
}

interface Istudent{
    fname : string;
    lname : string;
    age : number;
    canDrive : boolean;
}

let std1 : Istudent = {
    fname : 'Jen',
    lname : 'Doe',
    age : 22,
    canDrive : true
}


function sub(n1 : number, n2 : number, showRes : boolean, phrase : string){
    // if(showRes === true){
    //     cl(`${phrase} ${n1 - n2}`);
    // }else{
    //     return (`${phrase} ${n1 - n2}`);
    // }

    return (showRes === true) ? cl(`${phrase} ${n1 - n2}`) : (`${phrase} ${n1 - n2}`);
}

sub(500, 100, true, 'The substraction is : ');

let res1 = sub(100, 20, false, 'The substraction is : ');
cl(res1);


// ==================== Ex. 2) ==================

let e = 5;

// e = false;
// e = 'Hello';
e = 10;


let f = false;

// f = 12;
// f = 'abc';
f = true;


let g = 'kiwi';

// g = true;
// g = 24;

g = 'mango';


let h;

h = 'false';
h = 50;
h = true;

interface Ispec{
    camera : string;
    RAM : string;
}

interface Imobile{
    name : string;
    price : number;
    color : string;
    specifications : Ispec;
}

let Mob : Imobile = {
    name : 'samsung',
    price : 15000,
    color : 'white',
        specifications: {
        camera : '16megapx',
        RAM : '2gb'
    }
}

cl(Mob);


function multiply(n1 : number, n2 : number, showRes : boolean, phrase : string){
    // if(showRes === true){
    //     cl(`${phrase} ${n1 * n2}`);
    // }else{
    //     return (`${phrase} ${n1 * n2}`);
    // }

    return (showRes === true) ? cl(`${phrase} ${n1 * n2}`) : (`${phrase} ${n1 * n2}`)
}

multiply(10, 10, true, 'The multiplication is : ');

let res2 = multiply(20, 30, false, 'The multiplication is : ');
cl(res2);

// ===================== Ex. 3) ===================

let k = true;

// k = 'abc';
// k = 22;
k = false;

let m = 'number';

// m = true;
// m = 4;
m = 'css';

let n = 40;

// n = false;
// n = 'car';
n = 5;

let p;

p = 'html',
p = 22;
p = true;
p = 'false';

interface Isportperson{
    fname : string;
    lname : string;
    age : number;
    awards : string[];
}

let sportperson = {
    fname : 'Sachin',
    lname : 'Tendulkar',
    age : 50,
    awards : ['khelratna', 'arjuna award', 'padma shri']
}

function div(n1 : number, n2 : number, showRes : boolean, phrase : string){
    return (showRes === true) ? cl(`${phrase} ${n1/n2}`) : (`${phrase} ${n1/n2}`);
}

div(300, 5, true, 'The divison is : ');

let res3 = div(500, 25, false, 'The divison is : ');
cl(res3);


// ===================== Ex. 4) ===================

let q = 100;

// q = 'Tony';
// q = false;
q = 120;

let fname : string;

fname = 'Tony';

let r;

r = 30;
r = 'abc';
r = true;


interface Iaddress {
    city : string;
    state : string;
}

interface Iemp {
    fname : string;
    lname : string;
    empId : number;
    contact : number;
    Languages : string[];
    address : Iaddress;
}


let emp : Iemp = {
    fname : 'Jen',
    lname : 'Doe',
    empId : 105,
    contact : 1234567890,
    Languages : ['English', 'Marathi', 'Hindi', 'Tamil'],
    address : {
        city : 'Pune',
        state : 'Maharashtra'
    }
}

cl(emp);


function sum(n1 : number, n2 : number, showRes : boolean, phrase : string){

    return (showRes === true) ? cl(`${phrase} ${n1 + n2}`) : (`${phrase} ${n1 + n2}`);
}

sum(500, 400, true, 'The sum is : ');

let result = sum(300, 1000, false, 'The sum is : ');
cl(result);


// ===================== Ex. 5) ===================

let pqr = false;

// pqr = 20;
// pqr = 'true',
pqr = true;


interface Ipizza {
    type : string;
    size : string;
    slice : number;
    price : number;
    names : string[];
}

let pizza : Ipizza = {
    type : 'veg',
    size : 'medium',
    slice : 8,
    price : 250,
    names : ['peppy paneer', 'margerita', 'cheese burst']
}

cl(pizza);


function substraction(n1 : number, n2 : number, showRes : boolean, phrase : string){

    return (showRes === true) ? cl(`${phrase} ${n1 - n2}`) : (`${phrase} ${n1 - n2}`);
}


substraction(250, 100, true, 'The substraction is : ');

let res5 = substraction(400, 200, false, 'The substraction is : ');
cl(res5);