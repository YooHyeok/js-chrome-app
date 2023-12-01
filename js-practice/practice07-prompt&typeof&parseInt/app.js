/**
 * prompt : 자바스크립트 코드를 멈추게 한다.
 * message가 별로 이쁘지 않다.
 */
const data = prompt("숫자입력")

/**
 * typeof - variable, data의 타입을 확인한다.
 * 형태: typeof data || typeof 변수명 || typeof(data) || typeof(변수명)
 */
console.log(typeof(data) ) //string타입

/**
 * parseInt()
 * 문자를 숫자로 변경
 * 숫자가 아닌 경우 NaN이 출력된다.
 * NaN : Not A Number (숫자가 아니다.)
 * 단점 : 숫자 + 문자로 이루어진 문자열의 경우 숫자부분에 한하여 파싱된다.
 */

console.log(typeof(parseInt(data)) ) //number로 변경된다.