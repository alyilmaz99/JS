
//callback 

const callback = (n) => {
    return n**2;
}

function cube(callback,n){
    return callback(n)*n;
}
console.log(cube(callback,3));

//returning functions 

const higherOrder = n =>{
    const doSomething = m =>{
        const doSomthing2 = t=>{
            return 2 * n + 3 * m + t;
        }
        return doSomthing2;
    }
    return doSomething;
}
console.log(higherOrder(2)(3)(10));

const num = [1,2,3,4,5];
const sumArr = arr=>{
    let sum=0;
    const callback2 = function(element){
        sum += element;
    }
    arr.forEach(callback2);
    return sum;
}
console.log(sumArr(num));

const num2 = [1,2,3,4,5,6];
const sumArr2 = arr =>{
    let sum =0;
    arr.forEach(function(element){
        sum += element;
    });
    return sum;
}
console.log(sumArr2(num2));
console.log("--------------");

function sayHello(){
    console.log('Hello');
}
setInterval(sayHello,1000); // her saniye bastırır

function sayHi(){
    console.log('hi');
}
setTimeout(sayHi,2000); // 2 saniye sonra 1 kez bastırır

//************************************

//forEach

let sum2= 0;
const num3 = [1,2,3,4,5];
num3.forEach(num=> console.log(num));;
console.log(sum2);
num3.forEach(num=> {sum2 +=num;});
console.log(sum2);


const country = ["tr","ru","de","fr"];
country.forEach((element) => console.log(element.toUpperCase()));


//************************************
// MAP

const num4 = [1,2,3,4,5,6,7,];
const numSquare = num4.map((num) => num*num);
console.log(numSquare);

const names = ["al","ver","reis","trump"];
const namesToUpper = names.map((name) => name.toUpperCase());
console.log(namesToUpper);



const namesArray = ['Aaaaa','bbbbbb','cccccc','ddddddd','eeeeeee'];
const namesToUpper2 = namesArray.map((names) =>
        names.toUpperCase().slice(0,3)
);

console.log(namesToUpper2);

//************************************
//filter

const filterArray = ["aa123","bbb123","ccc123","ddddd","eeeee","123","a","12345","54321"];

const filter123 = filterArray.filter((filter2) =>
    filter2.includes('123')
);  
console.log(filter123);

const fiveNumberFilter = filterArray.filter((filtering)=>
        filtering.length ==5
);
console.log(fiveNumberFilter);


const scores =[
    {name: "aa", score: 65},
    {name:"bb", score: 12},
    {name: "cc", score: 34},
]
const scoresFilter = scores.filter((score) => score.score>13);
console.log(scoresFilter);

//************************************

//reduce

/*
reduce: Reduce takes a callback function. 
The call back function takes accumulator, current, 
and optional initial value as a parameter and returns a single value. 
It is a good practice to define an initial value for the accumulator value.
 If we do not specify this parameter, by default accumulator will get array first value. 
 If our array is an empty array, then Javascript will throw an error.
*/

const num5 =[1,2,3,4,5,6,7,8];
const sum4 = num5.reduce((acc,cur) => acc+cur, 0);
console.log(sum4);

//************************************
//every

const namesArray2 = ["abc","cde","efg"];
const areAllstr = namesArray2.every((name) => typeof name ==='string');
console.log(areAllstr);

const bools = [true,true,true,true];
const bollsAllTrue = bools.every((bool) => bool ===true);
console.log(bollsAllTrue);

//************************************
//find

const ages = [23,4,1,2,123,42323,12,21,22,25,24,26];
const age = ages.find((age) => age <22);
console.log(age);
console.log("------------------");

//************************************
//findindex

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const ages3 = [1,2,3,4,5,6,7,8,9];

const result = names2.findIndex((name) => name.length >7);
console.log(result);
const ageResult = ages3.findIndex((agea) => agea > 5);
console.log(ageResult);

//************************************
//some 
//aynı kullanım burda elementlerden birisi similarsa true değer dönderiyoır
const bools2 = [false,false,false];
const someCheck = bools2.some((bool) => bool ===false);
console.log(someCheck);

//************************************
//sort 

console.log(names2.sort());

console.log(ages.sort()); // bu şekilde kullanırsak hatalı sıralıyor

ages.sort(function (a,b){
    return a-b;
})
console.log(ages);

//************************************
//sorting object arrays

const users = [
    {name: 'aa', age:124},
    {name:'bb', age:113},
    {name:'cc', age:14},
]
users.sort((a,b)=>{
    if(a.age <b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
})
console.log(users);