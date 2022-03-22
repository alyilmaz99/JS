// destructing is a way to unpack arrays and objects and assigning to a district variable.

const numbers = [1,2,3];
let [numOne,numTwo,numThree] = numbers;
console.log(numOne,numTwo,numThree);

//-----------------------------------

const asd = [
    ["a","b","c","d"],
    ["e","f","g","h"],
];
const[first,second] = asd;
console.log(first);
console.log(second);
//-----------------------------------

let [num1, , num3] = numbers;
console.log(num1,num3);

//-----------------------------------

const nums = [1,2,3,4,5,6,7,8,9,0];
let [nums1,nums2,nums3, ...rest] = nums;

console.log(nums1,nums2,nums3);
console.log(rest);

//-----------------------------------
// destructuring during iteration

const countrs = [["tr", "TR"],["eng","ENG"]];
for(const [country,city] of countrs){
    console.log(country,city);
}

//-----------------------------------
// destructuring Object

const rect = {
    width: 20,
    height: 10,
    area: 200,
}
let {width,height,area,perimeter} = rect;
console.log(width,height,area,perimeter);

//-----------------------------------
//renaming during structuring

let{
    width: w, height:h,area:a,perimeter:p =10
} = rect;
console.log(w,h,a,p);

//-----------------------------------
//object parameter without destructuring

const calculatePerimeter = rect =>{
    return 2* (rect.width + rect.height);
}
console.log(calculatePerimeter(rect));

//-----------------------------------

const person = {
    firstName: "ali",
    lastName: "Yilmaz",
    age: "22",
    skills:[
        "js",
        "react",
        "angular",
        "vue",
    ],
    languages: ["eng","tr","fr"],
}

const getPersonInfo = obj =>{
    const skills = obj.skills;
    const formattedSkills = skills.slice(0,-1).join(", ");
    const languages = obj.languages;
    const formattedLanguages = languages.slice(0,-1).join(", ");

    personInfo = `${obj.firstName} ${obj.lastName} ${obj.age}
    ${formattedSkills}-  ${formattedLanguages}- ${languages[2]}`

    return personInfo;
}
console.log(getPersonInfo(person));

//-----------------------------------
//spread operator to copy array

const evens = [0,2,4,6,8];
const evenNumbers = [...evens];

const odds = [1,3,5,7,9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers.sort());

//-----------------------------------
// modifying or changing the object while copying

const user = {
    name:"ali",
    title: "prog",
    country: "tr",
    city: "yal",
}
const copiedUser = {...user, title:"ss"};
console.log(copiedUser);

//-----------------------------------
//spread operator with arrow function

const sumAllNums = (...args) =>
{
    console.log(args)
}
sumAllNums(1,2,3,4,5);

const sumAllNums2 = (...args) =>{
    let sum =0;
    for(const num of args){
        sum +=num;
    }
    return sum;
}
console.log(sumAllNums2(1,2,3,4,5));




