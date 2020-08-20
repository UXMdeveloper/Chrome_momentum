const greetingBox = document.querySelector(".js-greetingBox");
const greetingForm = document.querySelector(".js-form");
const input = greetingForm.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const greetingUsername = document.querySelector(".js-userName");
//USER LOCAL STORAGE
const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const DIR_CHANGE = "drReverse"; // flex-direction 바꾸기

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

//currentUser가 없는 경우에 User의 이름을 요청한다.
function askForName(){
    greetingForm.classList.add(SHOWING_CN);
    //form에 enter키 눌러서 전송하는 경우에 알아차리기를 원함.
    greetingForm.addEventListener("submit",handleSubmit);
}

function paintGreeting(){
    //text 색칠하려면 form을 지워야 함.
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =  `Good day, `;
}

function paintUsername(text) {
    greetingUsername.classList.add(SHOWING_CN);
    greetingUsername.innerText = `${text}`;
}

function modifyName(){
    greetingUsername.addEventListener("click", handleModify);
    greetingForm.addEventListener("submit", handleSubmit);
}

function handleModify() {
    const currentUsername = localStorage.getItem(USER_LS);
    greetingBox.classList.add(DIR_CHANGE);
    greetingUsername.classList.remove(SHOWING_CN);
    greetingForm.classList.add(SHOWING_CN);
    input.setAttribute("value", currentUsername);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting();
    paintUsername(currentValue);
    saveName(currentValue);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else{
        paintGreeting();
        paintUsername(currentUser);
        modifyName(currentUser);
    }
}
  
function init(){
    loadName();
}

init();