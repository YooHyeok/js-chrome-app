const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek) // montuewedthufrisatsun

/**
 * Array - 배열
 * 하나의 variable안에 데이터의 list를 갖는다.
 * 규칙1. 시작과 끝에 대괄호를 사용한다.
 * 규칙2. 각 요소는 쉼표를 통해 구분짓는다.
 * 규칙3. 복합 데이터를 허용한다.
 * 규칙4. index 순서는 0부터 시작한다. 
 *  ex) 1번째 index = 0 , 2번째 index = 1 ...
 * 규칙5. 배열의 특정 요소를 접근 하기 위해서는 변수명[index]로 접근한다.
 *  ex) 5번째 날짜인 fri 접근 : daysOfWeekArr[4]
*/
const daysOfWeekArr = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsenese = [1, 2, "hello", false, null, true, undefined, "nico"];
console.log(daysOfWeekArr)
console.log(nonsenese)

// 조회 [Element get]
// Get Item from Array - Array로부터 아이템 받아오기
console.log(daysOfWeekArr[4])

// 추가 [push]
// Add one more day to the Array - Array에 요일 하나 더 추가하기
daysOfWeekArr.push("sun")
console.log(daysOfWeekArr)

// 삭제 [delete]
// remove one day to the Array - Array에서 요일 하나 삭제하기
delete daysOfWeekArr[6] // sun 삭제 - 배열 공간은 고정되고 요소만 삭제되므로 길이는 7 삭제된 요소 위치에는 empty가 출력된다. ["mon", ... , empty]
console.log(daysOfWeekArr)
console.log(daysOfWeekArr[6]) // 삭제된 위치는 undefined로 출력된다.

const potato = "potato"
const tomato = "tomato"
const pizza = "pizza"

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab")
console.log(toBuy) // (4) ['potato', 'tomato', 'pizza', 'kimbab']
console.log(toBuy[2]) // pizza
console.log(toBuy[9898989898]) // undefined - 해당 인덱스에는 아무것도 정의되지 않았다.
