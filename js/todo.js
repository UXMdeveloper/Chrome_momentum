const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_Ls = 'toDos';
let toDos = [];

//TODOlist 제거.
//btn의 father에 해당하는 li 소거.
//cleanToDos returns an array having checked(clicked) items.
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter runs a function.
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

//JS는 LS의 모든 요소를 string으로 처리함.
function saveToDos(){
    localStorage.setItem(TODOS_Ls, JSON.stringify(toDos));
}

function paintToDo(text){
    //element를 생성하고, value를 넣어준 뒤 child관계를 이용하여 부모 - 자식 object를 만들어 주는 구조이다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span")
    //새롭게 만들어지는 li가 가질 id 설정.
    //deletebtn 클릭시 지워야 할 대상을 알기 위함.
    const newId = toDos.length + 1 ; 
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

 //JSON Javascript object notation
 //string을 불러오므로, string2object.
 //foreach 각각의 element에 대해서 함수 적용.
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_Ls);
    if(loadedToDos !== null){
       const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo){
           paintToDo(toDo.text);
       });
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();