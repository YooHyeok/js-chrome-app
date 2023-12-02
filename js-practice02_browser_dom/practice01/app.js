/**
 * document란?
 * 개발자도구 console 에 document를 입력하면 현재 페이지의 HTML 문서를 읽어들인다. 
 * 즉, document는 브라우저에 이미 존재하는 object이다.
 * 개발자가 접근할 수 있는 HTML 을 가리키는 객체이다.
 * 
 * console.dir(document) 해보면 HTML 객체를순수 object 형태로 확인할 수 있다.
 * javascript에서는 현재 참조중인 html을 접근하고 읽을수 있게 설정되어 있다.
 * 또한, 수정도 가능하다.
 * 이는 HTML에 항목들을 추가할 수 있다는 것이다.
 */
console.log(document)
console.dir(document)

console.log(document.title) // 현재 시점에서 출력은 안된다

window.onload = function() {
  console.log(document.title) // Mommentum 출력됨 (문서가 완료되었을 시점에 출력됨...)
  console.log(document.body) 

}

document.title = "멍청아" // 수정이 가능하다.
console.log(document.title) // 수정하고 나서는 출력이 된다. (문서가 완료되지 않았더라도 미리 title값을 넣었기 때문에 출력이되는거 같음.)

