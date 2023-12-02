
const something = document.getElementById("something");

something.innerText = "수정할꺼거든~" // 해당 element의 textNode를 수정한다.
console.log(something.className)

/**
 * getElementsByClassName()
 * HTMLCollection array형태 일반적인 forEach filter 작동안된다.
 * 해결책1. Array.prototype에 바인딩
 * 해결책2. HTMLCollection.prototype에 함수 직접 생성
 */
const hellos = document.getElementsByClassName("hello");
console.log(hellos) // HTMLCollection의 경우 배열형태이다.
hellos.innerText = "수정할꺼거든~" // 배열이기 때문에 수정이 안된다.

/* hellos.array.forEach(element => {
  element.innerText = "바보" // 수정되지 않는다.
});
 */

/* Array.prototype.forEach.call(hellos, (element) => { // 해결책2
  element.innerText = "바보" // 수정됨
}) */

/* HTMLCollection.prototype.forEach = Array.prototype.forEach // 해결책2
hellos.forEach(element => {
  element.innerText = "바보" // 수정되지 않는다.
}); */

const divH1 = document.getElementsByTagName("h1")
console.log(divH1)


/**
 * querySelector - css선택자 문법
 */

/**
 * css 선택자 단수 - querySelector
 * css 선택자인 class와 id 해당하는 element를 가져올 수 있다.
 * 단, 중복될 경우 가장 첫번째 요소만 가져온다.
 * + tagName도 가져온다.
 */
const queryH1 = document.querySelector("h1")
console.log(queryH1)

const queryId = document.querySelector("#something")
console.log(queryId)

/**
 *  * css 선택자 복수 - querySelectorAll
 * querySelector와 마찬가지로 css 선택자인 class와 id 해당하는 복수개의 element를 가져올 수 있다.
 * + tagName을 가져올때 복수개로 가져온다.
 */
const querysH1 = document.querySelectorAll("h1")
console.log(querysH1)

const querysId = document.querySelectorAll("#something")
console.log(querysId)

/**
 * querySelector에서 tagName이 되는 이유.
 * css선택자를 사용하기 때문에 
 * ex1) body {}
 * ex2) .something h1 {}
 */