
function funtionName(){

}

funtionName();

function square(){
    let num = 2;
    let sq = num *num;
    console.log(sq);
}

square();

function addTwo(){
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
    console.log(sum);
}
addTwo();

function printFullName(){
    let firstName = "a";
    let lastName = "b";
    let sapce = " ";
    let fullName = firstName + sapce+ lastName;
    return fullName;

}   
console.log(printFullName());

function areaCircle(r){
    let area = Math.PI*r*r;
    return area * area;
}
console.log(areaCircle(10));

function sumTwoNumbers(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(sumTwoNumbers(10,21));

function printFullNames(firstN, lastn){
    return `${firstN} ${lastn}`;

}
console.log(printFullNames('a','b'));

function sumArrayValues(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5];

console.log(sumArrayValues(numbers));

const areaOfCircle = (radius) => {
    let area= Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(2));

function showAllArguments(){
    console.log(arguments);
}
showAllArguments(1,23,34,45);

function sumAllNums(){
    let sum =0;
    for(let i =0; i< arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAllNums(1,2,3,4,5));

const sumAllNums2 = (...args) => {
    console.log(args);
}

sumAllNums2(1,2,3,4,5,6);

const sumAllNums3 = (...args) => {
    let sum =0;
    for(const element of args){
        sum += element;
    }
    return sum;
}
console.log(sumAllNums3(1,2,3,4,5,6,7,8));

const anonFun = function() {
    console.log(
        'asdzxcasdzxcsad'
    );
}
anonFun();

const square2 = function(n) {
    return n*n;

}
console.log(square2(2));


(function(n){
    console.log(n*n);
})(4)

let tut = (function(n){
    return n+n;
})(9)

console.log(tut);

const square3 = n => {
    return n*n;
}
console.log(square3(100));

const changeToUpperCase = arr => {
    const newArr= [];
    for(const element of arr){
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries = ['a','b','v'];
console.log(changeToUpperCase(countries));

function greetings(name = 'asd'){
    let message = `${name}, welcome`;
    return message;
}
console.log(greetings());
console.log(greetings('asdczxc'));

function weightofObject(mass, gravity = 9.81){
    let weight = mass * gravity + 'N';
    return weight;
}
console.log('we:' , weightofObject(100));
console.log('we::', weightofObject(100,1.62));