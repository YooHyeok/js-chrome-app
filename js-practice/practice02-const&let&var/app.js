/**
 * const와 let 그리고 var
 * 새로운 변수를 생성할 때 사용한다. 
 * const : constant(상수)의 줄임말로, 값이 바뀔 수 없다.
 *    ㄴ 즉, 변수 선언 후 업데이트(수정)할 생각이 전혀 없을때 사용한다.
 * let : 변수 선언 및 초기화 후 저장된 변수의 값을 수정할때 사용한다
 * var: 원한다면 어느 영역에서나 업데이트를 할 수 있게 된다.
 *    ㄴ 함수 내부에서 지역변수로 사용하였으나 함수 외부에서 수정이 가능한 현상이 발생함..
 */
const a = 5;
const b = 2;
let myName = "yooHyeok";

console.log(a+b); // 7
console.log(a*b); // 10
console.log(a/b); // 2.5

console.log("hello "+ myName);

myName = "YooHyeokSchool" // myName이 const일 경우 오류가 발생한다.
console.log("hello "+ myName);
c = "하이" // var키워드가 생략된 문법... 전역변수로 취급하나 함수 내부에서 선언할경우 함수 외부에서 수정이 가능하므로 이것은 var키워드를 붙히는것과 다를바 없으므로 추천하지않음.
console.log(c)