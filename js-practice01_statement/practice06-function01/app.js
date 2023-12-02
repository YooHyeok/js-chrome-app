console.log("Hello my name is YooHyeokSchool")
console.log("Hello my name is DoubleDoorStone")
console.log("Hello my name is YooHyeokChoi")
console.log("Hello my name is UrekMazino")

/**
 * function - 함수
 * 호출 할 때 마다 동일한 코드를 반복해서 사용할 수 있는 코드 조각처럼 사용.
 * 특정 코드를 캡슐화 한뒤, 여러번 실행 할 수 있게 해준다.
 * 
 * 형태 1. function 함수명 () {}
 *      ㄴ 반환값이 있다면 함수를 호출하고 변수에 저장하면 반환값을 저장할 수 있다.
 * 
 * {중괄호} 안에 실행할 문장을 입력한다.
 * 
 * 주요 특징이라면 함수 표현식(변수에할당)을 하지 않았기 때문에, 호이스팅에 의해 동일한 형태의 동일한 함수명으로 함수를 재지정 하면 이전 함수호출까지 영향을 준다.
 * 호이스팅이란 코드 실행 전에 함수 및 변수 선언이 끌어 올려지는 것을 의미한다.
 * 함수 호출시 코드 실행 이전에 매모리에 등록이 되므로, 코드 상에서 선언한 위치와 관계 없이 어디서든 호출할 수 있다.
 * 여러번 동일한 이름으로 함수를 선언하면, 나중에 선언된 함수가 이전에 선언된 함수를 덮어 쓴다.
 * 쉽게 말해 해당 자바스크립트 파일이 로딩될때, 선언된 모든 함수를 순차적으로 메모리에 적제하면서 재정의 한 경우에는 최종 함수를 덮어씌우게 되는데
 * 모든 함수를 메모리에 등록한 뒤 함수가 호출되는 함수 호출이 뒤로 밀리는듯한 느낌이 드는 원리이다.
 * 이것을 확인해보기 위해서는 함수를 먼저 호출하고 함수를 정의하더라도 함수가 호출되는것과 같다.
 * 함수 표현식을 통해 변수에 함수를 할당한다면, 이러한 현상을 방지할 수 있다.
 */
function sayHello () {
  console.log("Hello!")
}

/**
 * 함수 호출
 * 함수명 옆에 () 괄호 까지만 입력함으로써 함수를 실행할 수 있게 된다.
 */
sayHello();
sayHello();
sayHello();
sayHello();

/**
 * 함수 매개변수 argument (1개)
 * 매개변수는 함수를 실행하는 동안 어떤 정보를 함수에게 보내는 방법이다.
 * 형태 1. function 함수명 (매개변수) {매개변수를 활용한 코드}
 *  ex) alert(매개변수)
 */
function sayHelloArgEx1 (name) {
  console.log(name)
}

/**
 * 함수 호출
 * 함수명 옆에 () 괄호 까지만 입력함으로써 함수를 실행할 수 있게 된다.
 */
sayHelloArgEx1("YooHyeokSchool");
sayHelloArgEx1("DoubleDoorStone");
sayHelloArgEx1("YooHyeokChoi");
sayHelloArgEx1("UrekMazino");

/**
 * 함수 매개변수 2개
 * @param {*} name 
 * @param {*} age 
 */
function sayHelloArgEx2 (name, age) {
  console.log(name, age)
}
sayHelloArgEx2("YooHyeokSchool", 20);
sayHelloArgEx2("DoubleDoorStone", 27);
sayHelloArgEx2("YooHyeokChoi", 21);
sayHelloArgEx2("UrekMazino", 12);


/**
 * 최종
 * @param {*} name 
 */
function sayHelloArgFinal (name, age) {
  console.log("Hello my name is " + name + " and I'm " + age)
}

sayHelloArgFinal("YooHyeokSchool");
sayHelloArgFinal("DoubleDoorStone");
sayHelloArgFinal("YooHyeokChoi");
sayHelloArgFinal("UrekMazino");

/**
 * 함수를 활용한 계산기
 */
function plus (a, b) {
  console.log(a + b)
}
plus(8, 60)

function divide (a, b) {
  console.log(a / b)
}
divide(98, 20)

/**
 * 자기 호출 함수 1
 * 호출부를 포함하여 전체를 감싸는 괄호 형태
 */
/* (function plus (a, b) {
  console.log(a + b)
}(18, 30)) */

/**
 * 자기 호출 함수 2
 * 함수 선언부 중 블록까지 감싸는 괄호 형태 (호출부는 감싸지 않는다.)
 */
/* (function plus (a, b) {
  console.log(a + b)
})(28, 10) */

/**
 * 자기 호출 함수 3
 * 함수 선언부 맨앞에 !느낌표, 맨 마지막에 (매개변수)를 선언함으로써 호출한다.
 */
!function plus (a, b) {
  console.log(a + b)
}(28, 10)

/**
 * 객체 내부 함수
 */
const player = {
  name: "yooHyeok",
  sayHello: function() {
    console.log("Hello !")
  },
  sayGoodBye: function(otherPersonName) {
    console.log("Bye ! " + otherPersonName + " see you next time again!")
  }
}
console.log(player.name)
player.sayHello()
player.sayGoodBye("doorstone")