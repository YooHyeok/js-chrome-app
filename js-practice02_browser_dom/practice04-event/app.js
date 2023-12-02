
/**
 * css 제어
 */
const title = document.querySelector("div.hello:first-child h1")
console.log(title)
title.style.color = "blue"
document.body.style.backgroundColor = "beige"

/**
 * event listen - addEventListener()
 * 이벤트 발생 여부를 확인하고, 해당 이벤트에 대응하는 동작을 실행해준다.
 * 첫번째 매개변수로 발생 여부를 확인할 이벤트명을 입력한다.
 * 두번째 매개변수로 해당 이벤트가 발생했을 경우 실행할 콜백 함수를 이름으로 등록한다 (익명함수 직접 선언 가능)
 * 추후 해당 엘리먼트에 대해서 removeEventListner()를 사용할 수 있다.
 */
console.dir(title) // 굉장히 많은 event를 가지고 있다.

function handleTitleClick() {
  console.log("title은 클릭되었다!!")
  title.style.color = "black"
  document.body.style.backgroundColor = "white"
}

title.addEventListener("click", handleTitleClick) // 함수를 바로 호출하는 형태()(이대로 넘기면 클릭하지 않아도 바로호출됨)를 넘기지 않고 함수 명만 넘겨야 클릭했을때에만 호출된다.


function handleMouseEnter() {
  title.innerText = "Mouse is here!"
}

title.addEventListener("mouseenter", handleMouseEnter)

function handleMouseLeave() {
  title.innerText = "Mouse is gone!!"
}
title.addEventListener("mouseleave", handleMouseLeave)