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
  clock.innerText = `${date.getHours() >= 12 ? '[PM]' : '[AM]'}${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// getClock();
setInterval(getClock, 1000) // ms 주기로 반복해서 함수를 호출한다
// setTimeout(getClock, 1000) // ms만큼 기다린 후 1회 함수를 호출한다..
