/**
 * variable
 * 변수에는 공백을 사용할 수 없으므로 공백을 표현하기 위해서는 다음 단어의 첫 문자를 대문자로 지정한다.
 * (자바와 자바스크립트에서는 위와같은 camel표기법을 사용하고 Query, 파이썬에서는 _언더바를 사용하는 snake표기법을 사용한다.)
 * const : constant(상수) 바뀌지 않는 값 즉, 계속 유지되는 값을 저장할때 사용한다.
 */
console.log(5+2); // 7
console.log(5*2); // 10
console.log(5/2); // 2.5
const a = 5; // 5를 저장할 constant variable a
console.log(a+2); // 7
console.log(a*2); // 10
console.log(a/2); // 2.5
const b = 2; // 5를 저장할 constant variable a
console.log(a+b); // 7
console.log(a*b); // 10
console.log(a/b); // 2.5
const c = "2";
console.log(a+c); // 52
console.log(a*c); // 10 
console.log(a/c); // 2.5
console.log(c+a); // 25 : 덧셈 연산에서 피연산자 중 어느하나라도 문자열이라면 정수를 문자열로 변경한뒤 문자끼리 결합하는 방식으로 연산한다.
console.log(c*a); // 10 : 곱셈/나눗셈/나머지 연산에서 피연산자 중 어느 하나라도 정수라면 문자열를 정수로 변경한 뒤 정수끼리 연산한다.
console.log(c/a); // 0.4 : 곱셈/나눗셈/나머지 연산에서 피연산자 중 어느 하나라도 정수라면 문자열를 정수로 변경한 뒤 정수끼리 연산한다.