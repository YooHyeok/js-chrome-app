const clock = document.querySelector("#clock")

/**
 * [Date 객체]
 * date.getDate(); // ~일
 * date.getDay(); // ~요일
 * date.getFullYear(); // ~년
 * date.getHours(); // ~시
 * date.getMinutes(); // ~분
 * date.getSeconds(); // ~초
 */
function getClock() {
  const date = new Date();
  const pureHours = date.getHours();
  const hours = formatDoubleDigit(pureHours, 2, "0")
  const minutes = formatDoubleDigit(date.getMinutes(), 2, "0")
  const seconds = formatDoubleDigit(date.getSeconds(), 2, "0")
  // clock.innerText = `${pureHours >= 12 ? '[PM]' : '[AM]'}${pureHours}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`
  // clock.innerText = `${pureHours >= 12 ? '[PM]' : '[AM]'}${hours}:${minutes}:${seconds}`
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

function formatDoubleDigit(time, maxLength, fillString) {
  // return String(time).padStart(maxLength, fillString)
  return time.toString().padStart(maxLength, fillString)
}

getClock();
setInterval(getClock, 1000) // ms 주기로 반복해서 함수를 호출한다
// setTimeout(getClock, 1000) // ms만큼 기다린 후 1회 함수를 호출한다..

/**
 * padStart / padEnd 함수
 * padStart(maxLength: number, fillString: string)
 * 매개변수 순서로 최대 길이를 지정한 뒤 맨 앞자리에 어떤 문자를 추가할지 설정한다.
 * 만약 길이가 수정하려는 자릿수 미만일 경우 적용되지 않는다.
 * ex) 23 -> 123이 되려면 자릿수를 3으로 해야만한다.
 * 
 * 지정한 길이에서 원본문자열이 차지하는만큼을 제외하여 채우려는 문자열을 반복해서 문자열의 제일 앞부분에 채워준다
 * 즉, 길이를 20만큼 늘린 후 원본 문자열 대비 비어있는 길이만큼 지정한 문자열을 반복해서 채우는 기능이다.
 * 
 * padEnd도 padStart처럼 앞이 아닌 뒤에 값이 추가되는점을 제외하고 동일하다
 */
const singleDigit1 = "1".padStart(2, "0");
console.log(singleDigit1) // 01 출력
const singleDigit2 = "1".padEnd(2, "0");
console.log(singleDigit2) // 10 출력
const singleDigit3 = "1".padStart(5, "0");
console.log(singleDigit3) // 10 출력
const singleDigit4 = "1".padEnd(5, "0");
console.log(singleDigit4) // 10 출력
