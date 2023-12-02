const calculatorEx = {
  plus: function (a, b) {
    console.log(a + b)
  },
  minus: function (a, b) {
    console.log(a - b)
  },
  times: function (a, b) {
    console.log(a * b)
  },
  divide: function (a, b) {
    console.log(a / b)
  },
  power: function (a, b) {
    console.log(a ** b)
  }
}
calculatorEx.plus(2, 3);
calculatorEx.minus(2, 3);
calculatorEx.times(2, 3);
calculatorEx.divide(2, 3);
calculatorEx.power(2, 3);

/**
 * 함수의 반환 - function of return
 * 특정 작업을 수행하고 해당 결과를 반환해준다.
 * return을 통해 함수 호출부로 반환.
 */
const age = 96;
function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);
console.log(krAge)

/**
 * 함수에 return 적용
 */
const calculator = {
  plus: function (a, b) {
  return a + b
  },
  minus: function (a, b) {
    return a - b
  },
  times: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  },
  power: function (a, b) {
    return a ** b
  }
}

/**
 * 각 변수를 통해 함수간 의존하게된다.
 */
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(powerResult);