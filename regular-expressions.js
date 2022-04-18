//Flags

// g: is a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline 

// creating a pattern with RegExp Constructor

let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);

// let regEx = new RegExp('love' , 'gi');

// Creating a pattern without RegExp Constructor

let regEx2 = /love/gi;

// RegExp Object Methods 

const str = 'Test str for regExp';
const pattern2 = 'test'; // if we use test output is false 
let regEx3 = new RegExp(pattern2);
const result = regEx3.test(str);
console.log(result);

// Array containing all of match

const str2 = ' Test str for RegeXP';
const pattern3 = /for/g
const result2 = str.match(pattern3);
console.log(result2);

//search(): test for a match in a string. It returns the index of the match, or -1 if the search fails.

const str3 = "asd asD zxc fff";
const pattern4 = /zxc/g
const result3 = str3.search(pattern4);
console.log(result3);

//Replacing a substring 

const txt = ' Lorem ipsum asd asd zxc qwe fgh lşi';
matchReplaced = txt.replace(/Lorem|lorem/, 'AAA');
console.log(matchReplaced);

//-----------------------------

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt2.replace(/%/g, '');
console.log(matches);

//-----------------------------
// A set of Characters:
    /*
    [a-c] means , a or b or c
    [a-z] means, any character a to z
    [A-Z] means , any character A to Z
    [0-3] means , 0 or 1 or 2 or 3
    [0-9] means , any number 0 to 9
    [A-Za-z0-9] any character which is a to z,A to Z , 0 to 9

// \: uses to escape special characters
    \d mean: match where the string contains digits
    \D mean: match where the string does not contain digits

// .: any character except new line character
// ^: starts with
    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c
   
// $: ends with

    r'substring$' eg r'love$' , sentence ends with a word love

// *: zero or more times
    r'[a]*' means a optional or it can be occur many times

// +: one or more times

    r'[a]+' mean at least one or more times

// ?: zero or more times
    r'[a]?' mean zero times or once

// {3}: Exactly 3 characters
   {3,}: At least 3 character
   {3,8}: 3 to 8 character

//  |: Either or 
    r'apple|banana' mean either of an appple or banana    
    */

//-----------------------------

//Square Bracket 

    //const pattern = '[Aa]pple' // this square bracket mean either A or a

    const pattern5 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
    const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
    const matches2 = txt3.match(pattern5)

    console.log(matches2)  
//-----------------------------
    const txt4 = 'This regular expression example was made in December 6,  2019.'
    const pattern6 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
    const matches3 = txt4.match(pattern6)
    console.log(matches3)

//-----------------------------

// Exact match

let pattern7 = /^[A-Z][a-z]{3,12}$/;
let name = "Asabeneh";
let result4 = pattern7.test(name);
console.log(result4);