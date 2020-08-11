//const: 상수(불변) let:재할당은 가능하나 재선언은 불가능함
/*String
const what ="Wonjun You";
*/

/*
Boolean
const wat = true;
*/

/*
Number
const num = 666;
*/

//Float
//const ft = 55.1;

//Array
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon,tue,wed,thu,fri)

const dayOfWeek = ["Mon","Tue", "Wed", "Thu","Fri", "Sat","Sun"]

console.log(dayOfWeek)

//Object는 각 value에 이름을 줄 수 있음. {} 사용

const wonjunInfo = {
    name:"Wonjun",
    age:21,
    gender:"Male",
    isHandsome:true
}

wonjunInfo.age = 22; // value값 변경 가능함.

console.log(wonjunInfo.gender);

function sayHello(name, age){
    console.log("Hello!", potato);
}

sayHello("Wonjun",21);