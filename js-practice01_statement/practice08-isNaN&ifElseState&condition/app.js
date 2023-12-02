/**
 * 내장함수 isNaN(): boolean
 * 숫자가 아닌지에 대f해 여부
 * 숫자가 아니면 true 숫자면 false
 * paresInt()와 마찬가지로 "123ㅂㅈㄷ"와 같이 문자열 내에 숫자가 먼저 온다면 숫자부분만 자른 후 boolean여부 체크한다.
 */
console.log(isNaN("15")) // Not a Number 이므로 true
console.log(isNaN(15)) // Not a Number가 아니므로 false
console.log(isNaN("123ㅂㅈㄷ")) // Not a Number 이므로 true

/**
 * 조건문 conditionals
 * if(condition)
 * condition은 true 혹은 false만 들어올 수 있다.
 * if(true/false)
 * else의 선택적 사항으로 모든 조건이 아닐경우 실행된다.
 */
let condition = false|true
if (condition) {
  // condition === true
} else {
  // condition === false
}

const age = parseInt(prompt("몇살이야?"))
if (isNaN(age)) {
  console.log("Please write a number")
} else {
  console.log("Thank you for writing your age")
}