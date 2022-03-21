//set is a collection of elements

//creating set from array

const languages = [

    "a",
    "b",
    "c",
]
const setOfLan = new Set(languages);
console.log(setOfLan);

// set is an iterable pbject and we can iterate through each elements

for (const lan of setOfLan){
    console.log(lan);
}

//-------------------------

//adding an element to a set

const companies = new Set();

console.log(companies.size);

companies.add("d");
companies.add("e");
companies.add("f");
console.log(companies.size);
console.log(companies);

//adding use loop


setOfComp = new Set();
for(const company of companies){
    setOfComp.add(company);
}
console.log("-------");
console.log(setOfComp);

//-------------------------
//deleting
console.log(companies.delete("d"));
console.log(companies.size);

//-------------------------
//checking an element in set

console.log(companies.has("d"));
console.log(companies.has("e"));

//-------------------------
//clearing
companies.clear();
console.log(companies);
console.log("*******")
//-------------------------

const lang2 =[
    "turkish",
    "english",
    "french",
    "spanish",
]
const langSet = new Set(lang2);
console.log(langSet);
console.log(langSet.size);

const counts = [];
const count = {};

for (const l of langSet){
    const filteredLang = lang2.filter((lng) => lng === l);
    console.log(filteredLang);
    counts.push({lang:l, count:filteredLang.length});
}
console.log(counts);

//-------------------------
// union of sets

let a = [1,2,3,4,5];
let b = [3,4,5,6];
let c = [...a,...b ];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

//-------------------------
//intersection of sets

let d =[1,2,3,4,5];
let e =[3,4,5,6];

let E = new Set(e);
let D = new Set(d);

let f = d.filter((num)=> E.has(num));
let F =new Set(f);
console.log(F);

//-------------------------
//map

names = [
    ['Ali', "Yilmaz"],
    ['Arda', ]

];

const map = new Map(names);
console.log(map);
console.log(map.size);
//-------------------------

//adding values to the Map

const emptyMap = new Map();
console.log(emptyMap.size);
emptyMap.set("a","b");
emptyMap.set("c","d");
emptyMap.set("e","f");
console.log(emptyMap);
console.log(emptyMap.size);
//-------------------------
//  getting a value from map

console.log(emptyMap.get("a"));


//-------------------------
//chechking key in map

console.log(emptyMap.has("e"));