/**
 * 사용자 위치 정보 수집
 * 2개 argument 필요
 * 1. 성공시 실행 함수
 * 2. 실패시 실행 함수
 */
currentPosition = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 

/**
 * getCurrentPosition 성공 콜백 함수
 * PositionOptions
 * coords: 좌표
 * ㄴ 1. latitude: 위도
 * ㄴ 2. longitude: 경도
 * 
 * 위 좌표값을 위치로 바꿔줄 API 이용
 * API주소 : https://openweathermap.org/
 * API 계정 가입
 * 1. https://openweathermap.org/api
 * 2. Current Weather Data - API doc 링크 이동
 * units=metric를 통해 화씨 온도를 섭씨온도 정보로 변환
 * 
 * 
 * @param {*} position 
 */
function onGeoOk(position) {
  const lat = position.coords.latitude// 위도
  const lng = position.coords.longitude// 경도
  const API_KEY = "32c7ade76f0e3f495584cbb0d0cd1efe";
  const END_POINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

  /**
   * fetch의 동작 방법 : promise
   */
  fetch(END_POINT)
  .then(response => response.json()) 
  .then(data => {
    const weather = document.querySelector("#weather span")
    const city = document.querySelector("#location span")
    weather.innerText = `${data.weather[0].main} ${data.main.temp}°`
    city.innerText = data.name
  }) 
  .catch((error) => console.log("error:", error));
  console.log("You live it", lat, lng, END_POINT)
}

/**
 * getCurrentPosition 실패 콜백 함수
 * @param {*} error 
 */
function onGeoError(error) {
  console.log(error)
  alert("Can't find you. No Weather for you.")
}