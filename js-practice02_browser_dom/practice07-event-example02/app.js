const h1 = document.querySelector("div.hello:first-child h1")
console.log(h1)

/**
 * 자바스크립트로 css를 직접 제어하는것이 아니라, class를 부여함으로서 css를 제어한다.
 */
function handleTitleClick() {
  const clickedClass = "active"
  /* if(h1.className === clickedClass) {
    h1.className = "" 
  } else  h1.className = clickedClass
   */
  h1.className = h1.className === clickedClass ? "" : clickedClass
  
}

h1.addEventListener("click", handleTitleClick); 


