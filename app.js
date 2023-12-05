const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input") // 가장 처음 input
const link = document.querySelector("a")


/**
 * form submit의 기본동작인 새로고침이 발생한다.
 * e.preventDefault()를 통해 기본동작을 방지한다.
 * @param {*} e 
 */
function onLoginSubmit(e) {
  e.preventDefault();
  console.log(e)
  console.dir(e)
}

function handleLinkClick(e) {
  console.log(e)
  e.preventDefault();
}

/**
 * addEventListener의 콜백함수 호출시 발생한 이벤트 객체를 매개변수로 넘긴다.
 */
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);