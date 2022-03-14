console.log("gg");

for (let i=0; i<=5; i++){
    console.log(i);
}

for(let i =0; i<=5 ; i++){

    console.log(`${i}*${i} = ${i*i}`);
}

const contry = ['fin', 'swe', 'den','norw','ice'];

const newArr = [];

for(let i =0; i < contry.length ; i++){
    newArr.push(contry[i].toLocaleUpperCase());
}
for(let i =0; i<contry.length; i++){

    console.log(`${newArr[i]}`);
}

const number = [1,2,3,4,5];
const newArr2 = [];
let sum =0;

for(let i=0; i <number.length ; i++){
    newArr2.push(number[i]**2);
}
console.log(newArr2);

let i =0;
while(i <=5){
    console.log(i);
    i++;
}

let a =0;
do {
    console.log(a);
    a++;
}while (a<=5)

const num = [1,2,3,4,5,6];

for (const nums of num){
    console.log(nums);
}
console.log("-----------------")
let sum2 =0
for (const nums of num){
    sum2 = sum2 +nums;
}
console.log(sum2);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  for(const tech of webTechs){
      
      console.log(tech.toUpperCase());
  }
  
  const bos =[];
  for(const pushs of webTechs){
      bos.push(pushs.toLowerCase());
  }
  console.log(bos);

  //break komut durdurmada kullanılıyor
  //continue işlevide aynı

  