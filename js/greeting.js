const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//USER LOCAL STORAGE
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    /* form enter click event의 default setting: form 내용을 전송하며,
    나아가 페이지를 새로고침한다. 
    preventDefault : event의 기본 설정을 제거한다.*/
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

//currentUser가 없는 경우에 User의 이름을 요청한다.
function askForName(){
    form.classList.add(SHOWING_CN);
    //form에 enter키 눌러서 전송하는 경우에 알아차리기를 원함.
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    //text 색칠하려면 form을 지워야 함.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =  `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}
  
function init(){
    loadName();
}

init();