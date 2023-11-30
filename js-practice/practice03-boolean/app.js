/**
 * boolean
 * true / false 
 * ex) 사용자가 로그인 되었는지 여부로 사용가능한 데이터타입이다.
 */

const amIFat = false;
console.log(amIFat)

/**
 * 부정적 타입 1 - null
 * '아무것도 없음'을 의미하며 false와 다르다.
 * empty인 비어있다는 의미보다는 아무것도 없는것으로 채웠다는 의미이다.
 * null은 자연적으로 발생하지 않는다.
 * 개발자가 variable에 어떤것이 없다는 것을 확실히 하기 위해 사용한다.
 */
const nothing = null;

/**
 * 부정적 타입 2 - undefined
 * '정의되지 않음' 을 의미하며 false와 같다.
 * 아래의 something 변수의 경우 변수를 선언은 했으나 값을 할당하지는 않은 상태이다.
 */
let something;
console.log(something) // undefined 출력

/**
 * undefined는 if문의 조건에서 false로 간주되고 !undefined의 경우 true로 간주된다.
 * 하지만 출력하게되면 undefined는 undefined로 출력되고 !undefined는 true로 출력된다.
 */
if (undefined) {} //else문이 실행된다.
else { 
  console.log(undefined) //undefined
  console.log("조건이 거짓이다.")
}

if (!undefined) { //if문이 실행된다.
  console.log(!undefined) //true
  console.log("조건이 참이다") // undefined이지만 true로 실행된다.
} else {}

/**
 * null과 undefined의 연산
 */
console.log(null + "안녕")
console.log(undefined + "안녕")