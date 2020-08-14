const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//USER LOCAL STORAGE
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    //text 색칠하려면 form을 지워야 함.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =  `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){

    } else{
        paintGreeting(currentUser);
    }
}
  
function init(){

}