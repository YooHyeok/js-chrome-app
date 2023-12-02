/**
 * id를 통한 dom객체 접근 1
 * document.getElementById()
 * html 파일에서 script가 <head>에 있을경우 <body> 보다 먼저 읽어들이기 때문에 바로 dom객체에 접근할수가 없음.
 */

/* window.onload = function() {
  console.log(document.getElementById("title"))
} */

/**
 * id를 통한 dom객체 접근 2
 * html파일에서 해당 태그 아래에서 <script>를 선언하여 읽어들여야한다.
 * ex) <h1 id="title">바보</h1> <script src="~.js"></script>
 */
const title = document.getElementById("title");
console.dir(title);

/**
 * <h1 autofocus class="hello" id="title">Grab me!</h1>
 */
console.log(title.autofocus) // true
console.log(title.className) // hello

title.innerText = "수정할꺼거든~" // 해당 element의 textNode를 수정한다.


