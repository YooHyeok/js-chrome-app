const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list")
// const toDoInput = document.querySelector("#todo-form > input")
const toDoInput = toDoForm.querySelector("input") // "#todo-form input 혹은 #todo-form > input 과 같다"
function handleToDoSubmit(e) {
  e.preventDefault(); //form 태그 안에 들어있는 input에 enter시 작동하는 submit을 방지
  /**
   * 버그 발생 코드 : toDoList.appendChild(document.createElement("li").appendChild(document.createTextNode(newToDo)))
   * appendChild는 대상 요소의 자식으로 특정 노드를 추가한 뒤에 자식요소를 반환한다.
   * 따라서 한줄로 처리하게 될 경우 반환받은 자식요소를 갖게 된다.
   * 텍스트노드를 자식요소로 추가하는 작업 자체는 li 노드에 작업을 했지만 이후 해당 텍스트노드를 반환하기 때문에
   * toDoList의 자식요소로 추가되는 값은 newToDo라는 텍스트노드가 들어가게된다.
  */
  const newToDo = toDoInput.value

  const textNode = document.createTextNode(newToDo)
  const liEl = document.createElement("li")
  liEl.appendChild(textNode);
  toDoList.appendChild(liEl)
  
  toDoInput.value = "";
}
toDoForm.addEventListener("submit", handleToDoSubmit);