const h1 = document.querySelector("div.hello:first-child h1")
console.log(h1)

/**
 * classList 속성
 * function()을 활용하여 class를 제어한다
 * contains() : class로 포함되어있는지 여부를 확인해준다.
 * add() : class를 추가한다.
 * remove() : class를 제거한다.
 * 
 * toggle(): contains, add, remove를 한번에 해준다.
 */
function classListControl() {
  
}
function handleTitleClick() {
  const clickedClass = "active"
  
  /* if(h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass)
  } else h1.classList.add(clickedClass) */

  // h1.classList.contains(clickedClass) ? h1.classList.remove(clickedClass) : h1.classList.add(clickedClass)

  const h1Classes = h1.classList //여러번 접근하지 않고 한번에 객체로 추출
  // h1Classes.contains(clickedClass) ? h1Classes.remove(clickedClass) : h1Classes.add(clickedClass)
  
  h1Classes.toggle(clickedClass);
  
}

h1.addEventListener("click", handleTitleClick); 


