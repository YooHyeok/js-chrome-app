
const age = parseInt(prompt("몇살이야?"))

/**
 * true || true === true
 * false || true === true
 * true || false === true
 * false || false === false
 * 
 * true || true === true
 * false || true === true
 * true || false === true
 * false || false === false
 * 
 * 왼쪽부터 오른쪽 순서로 평가하는 도중 이미 결과가 확실한 경우 나머지 조건 평가를 수행하지않고 바로 중단한다.
 * ex1) true || false => true || 까지만 읽음
 * ex2) false && true => false && 까지만 읽음
 */
if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number") // 양의 정수를 입력해라!
} else if (age < 18) {
  console.log("You are too young.") // 너는 너무 어려.
} else if (age >= 18 && age <= 50) {
  console.log("You can drink") // 너는 마실 수 있다.
} else if(age > 50 && age <= 80) {
  console.log("You should exerciese ") // 너는 운동을 해야만한다
}