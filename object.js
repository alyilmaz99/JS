const person = {};

const rectangle = {
    length: 20,
    width: 20,
}
console.log(rectangle);

const person2 = {
    fistName: "asd",
    lastName: "asd",
    age: 22,
    country: "tr",
    city: "ist",
    skills: [
        "css",
        "c",
        "c#",
    ],
    isMarried: true,
}
console.log(person2);

const person3 =
{
    name: "asdsdrqw",
    lastName : "xxxx",
    age: "123",
    skills:[
        "c",
        "c#",
        "css",

    ],
    isMarried: false,
    getFullName: function(){
        return ` ${this.name} ${this.lastName} `;
    },
    'phone number': '+21354564',
}
console.log(person3.name);
console.log(person3.lastName);
console.log(person3.age);

console.log(person3['name']);
console.log(person3['location']);
console.log(person3.getFullName());
console.log("----------------")
person3.nationality ="tr";
person3.country = "eng";
person3.skills.push('meteor');
person3.isMarried= true;
person3.title = "coder";

person3.getPersonInfo = function(){
    let skillsWihtoutLastSkill = this.skills
    .splice(0,this.skills.length-1)
    .join(', ');

    let lastSkill = this.skills.splice(this.skills.length-1)[0];
    let skills = `${skillsWihtoutLastSkill}, and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}. \nHe lives in ${this.country}.\nHe codes${skills}`;
    return statement;

}
console.log(person3);
console.log(person3.getPersonInfo());

console.log("*************");

const person4 ={
    fistName :"ali",
    address: {
        street: "zzzzz",
        pobox: 2002,
        city: "a",
    },
    getPersonInfo: function(){
        return `I am ${this.fistName}, ${this.address.city}  ${this.address.pobox}`;

    }


}

const copyPerson = Object.assign({}, person4);
console.log(copyPerson);
console.log(copyPerson.getPersonInfo());

const keys = Object.keys(copyPerson);

console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

//---------------------

const values = Object.values(copyPerson);
console.log(values);

//---------------------

const entries = Object.entries(copyPerson);
console.log(entries);

//----------------------

console.log(copyPerson.hasOwnProperty('name'));