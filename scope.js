a = 'js';
b = 10;

function learnScope(){
    console.log(a,b);
    if(true){
        console.log(a,b);
    }
}
learnScope();
console.log(a,b);

let c = "js";
let d = 20;

function learnScope2(){
    console.log(c,d);
    if(true){
        let c = "py";
        let d = 100;
        console.log(c,d);
    }
    console.log(c,d)
}
learnScope2();
console.log(a,b);

let e = "jss";
let f = 30;

function learnScope23(){
    console.log(e,f);
    let value = false;
    if(true){
        let e = "py";
        let f = "40";
        let g = 50;
        let h = 60;
        value = !value;
        console.log(e,f,g,h,value);
    }
    console.log(e,f,value);

}
learnScope23();
console.log(e,f);

function learnScope4(){
    var gravity = 9.81;
    console.log(gravity);
}
learnScope4();

if(true){
    var gravity = 9.81;
    console.log(gravity);
}
console.log(gravity);

for(var i = 0;i<3 ; i++){
    console.log(i);
}
console.log(i + "--");

function learnScope5(){
    const gravity2 = 9.81;
    console.log(gravity2);
}
learnScope5();
//console.log(gravity2);
if(true){
    const gravity3 = 9.81;
    console.log(gravity3);
}
for(let i =0; i<3; i++){
    console.log(i);
}

