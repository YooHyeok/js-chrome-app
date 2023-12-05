const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input") // 가장 처음 input

/**
 * form submit의 기본동작인 새로고침이 발생한다.
 * e.preventDefault()를 통해 기본동작을 방지한다.
 * @param {*} e 
 */
function onLoginSubmit(e) {
  e.preventDefault();
  console.log(e)
  console.dir(e)
  // const username = loginInput.value;
  // console.log(username)
}
loginForm.addEventListener("submit", onLoginSubmit);