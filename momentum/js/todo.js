const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list")
// const toDoInput = document.querySelector("#todo-form > input")
const toDoInput = toDoForm.querySelector("input") // "#todo-form input 혹은 #todo-form > input 과 같다"

const TODOS_KEY = "toDos"
let toDos = [];

function handleToDoSubmit(e) {
  e.preventDefault(); //form 태그 안에 들어있는 input에 enter시 작동하는 submit을 방지
  const newToDo = toDoInput.value
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }
  paintToDo(newToDoObj)
  toDos.push(newToDoObj) // 입력된 todo object 배열에 추가
  saveToDos()
  toDoInput.value = "";
}

/**
 * ToDo를 그린다.
  * 버그 발생 코드 : toDoList.appendChild(document.createElement("li").appendChild(document.createTextNode(newToDo)))
  * appendChild는 대상 요소의 자식으로 특정 노드를 추가한 뒤에 자식요소를 반환한다.
  * 따라서 한줄로 처리하게 될 경우 반환받은 자식요소를 갖게 된다.
  * 텍스트노드를 자식요소로 추가하는 작업 자체는 li 노드에 작업을 했지만 이후 해당 텍스트노드를 반환하기 때문에
  * toDoList의 자식요소로 추가되는 값은 newToDo라는 텍스트노드가 들어가게된다.
  * const textNode = document.createTextNode(newToDo)
  * li.appendChild(textNode)
  * toDoList.appendChild(li)
 */
function paintToDo(newToDoObj) {
  const li = document.createElement("li")
  li.className = "toDo";
  const span = document.createElement("span")
  span.innerText = newToDoObj.text;
  li.dataset.id = newToDoObj.id
  const button = document.createElement("button")
  button.className = "toDo__button"
  button.innerText = "❌" //이모지 단축키 : window + .
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li)
}

function deleteToDo(e) {
  const li = e.target.parentElement;

  li.remove() //event가 발생한 target : button / button의 부모노드 : li [제거]
  
  localStorage.removeItem(TODOS_KEY)
  // localStorage.setItem(TODOS_KEY, JSON.stringify(toDos.filter(el => el.id != li.dataset.id))) 
  toDos = toDos.filter(el => el.id !== Number.parseInt(li.dataset.id)) // 리액트처럼 값이 변할경우 리랜더링이 되지 않으면 toDos의 값에서는 삭제가 되지 않기때문에 toDos에 반영을 해줘야한다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

/**
 * JSON.stringify() - 자바스크립트의 Object 혹은 Array 타입의 데이터를 JSON형태의 문자열로 변환하여 저장한다
 * [a,b,c] 형태의 배열 저장시 a,b,c로 저장되는것을 
 * '["a", "b", "c"]' 형태로 저장한다.
 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/**
 * 초기화
 * 페이지 진입시 localStorage에 저장된 toDos 데이터를 로딩
 * 해당 데이터가 비어있지 않으면 toDo를 저장할 배열 toDos에 복사해서 덮어씌운다.
 */
const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos !== null) {
  const paresedToDos = JSON.parse(savedToDos) // JSON.parse를 통해 javascript 데이터 형태로 변환한다.
  toDos = paresedToDos;
  // paresedToDos.forEach(function(item) {paintTo(item)}); // forEach : Array의 각 item에 대해 function을 실행한다. (호출한 function에 매개변수로 item을 넘긴다.)
  // paresedToDos.forEach((item) => paintTo(item)); // 콜백함수를 arrow 함수 형태로 사용
  toDos.forEach(paintToDo); // 자바스크립트가 자동으로 parseToDos배열의 특정 요소에 순차적으로 접근하여 콜백함수의 매개변수로 전달하기 때문에 함수명만 넣어주면 해당 함수의 매개변수로 전달해준다.
}