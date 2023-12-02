const h1 = document.querySelector("div.hello:first-child h1")
console.log(h1)
h1.style.color = "blue"
document.body.style.backgroundColor = "beige"


/**
 * event listen - on이벤트명 = function명
 * 추후 해당 엘리먼트에 대해서 removeEventListner()를 사용할 수 없다.
 */
console.dir(h1) // 굉장히 많은 event를 가지고 있다.

function handleTitleClick() {
  console.log("title은 클릭되었다!!")
/*   title.style.color = "black"
  document.body.style.backgroundColor = "white" */
}

h1.onclick = handleTitleClick; // 함수를 바로 호출하는 형태()(이대로 넘기면 클릭하지 않아도 바로호출됨)를 넘기지 않고 함수 명만 넘겨야 클릭했을때에만 호출된다.


function handleMouseEnter() {
  h1.innerText = "Mouse is here!"
}
h1.addEventListener("mouseenter", handleMouseEnter)

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!!"
}
h1.addEventListener("mouseleave", handleMouseLeave)

/**
 * window event
 * [resize, copy, paste, offline, online]
 */
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato"
}
window.addEventListener("resize", handleWindowResize)

function handleWindowCopy() {
  alert("copier!")
}
window.addEventListener("copy", handleWindowCopy) //복사

function handleWindowPaste() {
  alert("paister!")
}
window.addEventListener("paste", handleWindowPaste) //붙여넣기

function handleWindowOffline() {
  alert("SOS no WIFI!")
}
window.addEventListener("offline", handleWindowOffline) //와이파이 연결안됨

function handleWindowOnline() {
  alert("All GOOOOOOOOD!")
}
window.addEventListener("online", handleWindowOnline) //와이파이 연결됨