const playerName = "yooHyeok";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

/**
 * player[0]: name
 * player[1]: points
 * player[2]: handsome
 * player[3]: fat
 */
const playerArr = ["nico", 1212, false, "little bit"] //배열은 단순히 데이터만 가지고있고, 각 데이터가 어떤 의미를 갖는지에 대해서는 알수없다.

/**
 * Objects - 객체
 * 중괄호를 사용한다.
 * 각 요소는 property라고 부른다.
 * 각 property는 key : value 형태로 나열한다.
 * key에는 속성의 이름, value에는 데이터를 매핑하는 형태로 저장한다.
 * variable.key 혹은 player["name"] 형태로 property에 접근한다.
 * player.name
 * player["name"]
 */
const player = {
  name: "yooHyeok",
  points: 10,
  handsome: true,
  fat: true
}
console.log(player)
console.log(player.name)
console.log(player["name"])

/**
 * property 값 수정
 * 의문점 : const variable임에도 값 수정이 가능한 이유
 * object는 동일한 상태로 property에 대한 값만 변경하기 때문.
 * ex) player = {} 변경 안된다.
 */
player.name = "yooHyeokSchool"
player.points += 15;
console.log(player)
console.log(player.name)
console.log(player["name"])
console.log(player["points"])
// player = "123" //const이기 때문에 variable 하나의 값에 대한 업데이트는 불가능

/**
 * property 값 추가
 */
player.lastName = "Dev"
player.age = "32"
console.log(player) // 마지막 property에 lastName: "Dev" 가 추가된다. (콘솔 버그....)
console.log(player.lastName) // 마지막 property에 lastName: "Dev" 가 추가된다.

/**
 * property 값 삭제
 */
delete player.lastName
delete player["age"]
console.log(player) // 마지막 property에 lastName: "Dev" 가 추가된다.