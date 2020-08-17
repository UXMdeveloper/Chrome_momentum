const API_KEY = "379f901d255c3c997dc259e19345a23c";
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
//when success to bring user's geolocation.
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //object에 변수명 같게 저장시 하나만 써줘도 괜찮다.
    const coordsObj = {
        latitude: latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Can't access geolocation")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else{
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();