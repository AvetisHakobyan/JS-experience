const redBut = document.getElementById("red");
const greenBut = document.getElementById("green");
const input = document.querySelector("#input");
const field = document.querySelector(".field");
const chlickMe = document.querySelector("#add");
const boldBut = document.querySelector(".bold");
const italicBut = document.querySelector(".italic");
const underline = document.querySelector(".insert");
const lineThrogh = document.querySelector(".del");




input.addEventListener("keyup", (e) =>{
    field.innerText = e.target.value;
}
)



greenBut.addEventListener("click", (e) =>{
    field.style.color === "green"? field.style.color = "black" : field.style.color = "green";
})

redBut.addEventListener("click", (e) =>{
     field.style.color === "red"?  field.style.color = "black" :  field.style.color = "red";
   
})


boldBut.addEventListener("click", () => {
    if(field.style.fontWeight === "bold"){
        
       return field.style.fontWeight = "normal";
    } 
    
      field.style.fontWeight = "bold"; 
     
    
    
})

italicBut.addEventListener("click", () => {
    
     if(field.style.fontStyle === "italic"){
         return field.style.fontStyle = "normal";
     }

     field.style.fontStyle = "italic";
})

underline.addEventListener("click", () =>{
     field.style.textDecoration === "underline" ? field.style.textDecoration = "none":field.style.textDecoration = "underline";
   
})
lineThrogh.addEventListener("click", () => field.style.textDecoration === "line-through"?field.style.textDecoration = "none": field.style.textDecoration = "line-through" );