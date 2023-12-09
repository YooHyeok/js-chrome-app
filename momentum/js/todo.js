const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list")
// const toDoInput = document.querySelector("#todo-form > input")
const toDoInput = toDoForm.querySelector("input") // "#todo-form input 혹은 #todo-form > input 과 같다"
const toDos = [];
function handleToDoSubmit(e) {
  e.preventDefault(); //form 태그 안에 들어있는 input에 enter시 작동하는 submit을 방지
  const newToDo = toDoInput.value
  paintTo(newToDo)
  toDos.push(newToDo) // 입력된 todo 배열에 추가
  saveTodos()
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
function paintTo(newToDo) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  span.innerText = newToDo;
  const button = document.createElement("button")
  button.innerText = "❌" //이모지 단축키 : window + .
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li)
}

function deleteToDo(e) {
  console.dir(e.target)
  // e.target.parentNode.remove() 
  e.target.parentElement.remove() //event가 발생한 target : button / button의 부모노드 : li [제거]
}

/**
 * JSON.stringify() - JSON형태의 문자열로 변환하여 저장한다
 * [a,b,c] 형태의 배열 저장시 a,b,c로 저장되는것을 
 * ["a", "b", "c"] 형태로 저장한다.
 */
function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(toDos))
}

toDoForm.addEventListener("submit", handleToDoSubmit);
