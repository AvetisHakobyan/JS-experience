const colorChangerBt = document.querySelector(".addColor");
const docBody = document.querySelector("body");
function randomCol (...colArr) {
   return  colArr[Math.floor(Math.random()*10) + 1];
}
colorChangerBt.addEventListener("click", () =>{
    docBody.style.backgroundColor = randomCol("red","black","yellow","blue","green", "white","pink","brown","coral","lime");
})
