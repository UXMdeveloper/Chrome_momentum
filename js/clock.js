const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

//clock : 현재 시간을 얻는다 -> Date 클래스.
//getDay 월~일 요일을 (1~7) 숫자로 얻음
//but date 클래스의 인스턴스를 만든 시점의 시간만 불러올 수 있다.

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    // innerText 객체 안에 text를 넣는 법
    // 3항 연산자 condition True False
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }`;
}

function init(){
    getTime();
    //함수를 주어진 시간 (1초) 마다 반복 수행.
    setInterval(getTime,1000);
}

init();