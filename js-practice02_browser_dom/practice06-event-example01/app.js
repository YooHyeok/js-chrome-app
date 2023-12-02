const h1 = document.querySelector("div.hello:first-child h1")
console.log(h1)
document.body.style.backgroundColor = "beige"



function handleTitleClick() {

  /* if (h1.style.color === "blue") {
    h1.style.color = "tomato";
  } else {
    h1.style.color = "blue";
  } */

  /* if (h1.style.color === "blue") {
    h1.style.color = "tomato";
    return
  }
  h1.style.color = "blue"; */

 /*  const currentColor =  h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else  newColor = "blue";
  h1.style.color = newColor; */

  h1.style.color = h1.style.color === "blue" ? "tomato" : "blue"

}

h1.addEventListener("click", handleTitleClick); // 함수를 바로 호출하는 형태()(이대로 넘기면 클릭하지 않아도 바로호출됨)를 넘기지 않고 함수 명만 넘겨야 클릭했을때에만 호출된다.


