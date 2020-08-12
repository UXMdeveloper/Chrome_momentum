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
    console.log("Hello!" + name + "you are" + age + "years old");
    console.log(`Hello ${name} you are ${age} years old`)
}

sayHello("Wonjun",21);

const greetWonjun = sayHello("Wonjun", 21);

console.log(greetWonjun)

//calculator

const calculator = {
    plus : function(a,b){
        return a + b ;
    }
}

const plus = calculator.plus(5,5)
console.log(plus)

//document 객체는 window 객체의 하위 object로 html 태그 조작을 담당한다.
//getElementById -> html에서 해당 아이디를 가진 태그를 선택한다.
//getElementByClassName, getElementByTagName

//document.querySelector -> css 선택자 id는 #, 클래스는 .
const title = document.getElementById("title");
console.log(title);
console.dir(title);
//javascript로 HTML ID를 활용하여 HTML, CSS속성을 변경할 수 있다.
title.style.color = "white";
title.innerHTML = "HI! From JS";

//window
//javascript is waiting for occuring events.

function handleResize(){
    console.log("I have been resized")
}
window.addEventListener("resize", handleResize)

function handleClick(){
    console.log("Clicked");
    title.style.color = "skyblue";
}
title.addEventListener("click", handleClick)

//condition
// && and || or
if(20 > 5 && "nicolas" === "nicolas"){
    console.log("yes")
} else{
    console.log("no")
}

//prompt 지금은 사용하지 않음.
const age = prompt("How old are you? ")
console.log(age)

if (age >= 20){
    console.log('You can drink')
} else{
    console.log('You cannot drink')
}