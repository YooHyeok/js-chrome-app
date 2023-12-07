// const link = document.querySelector("a")

/**
 * addEventListener의 콜백함수 호출시 발생한 이벤트 객체를 매개변수로 넘긴다.
 */
// link.addEventListener("click", handleLinkClick);

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input") // 가장 처음 input
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

/**
 * form submit의 기본동작인 새로고침이 발생한다.
 * e.preventDefault()를 통해 기본동작을 방지한다.
 * @param {*} e 
 */
function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAME_KEY, username) // 브라우저에서 제공하는 로컬 저장소
  paintGreetings(username)
}

/**
 * #greeting 영역에 입력한 값을 출력하는 함수
 * @param {*} username 
 */
function paintGreetings(username) {
  // greeting.append("Hello " + username)
  // greeting.innerText = "Hello " + username
  greeting.innerText = `Hello ${username}` // 템플릿 리터럴: `백틱` + ${플레이스 홀더}
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

/**
 * 페이지 초기 진입시 로그인 여부
 */
const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
  // show the form
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASSNAME)
} else {
  // show the greetings
  paintGreetings(savedUserName)
}