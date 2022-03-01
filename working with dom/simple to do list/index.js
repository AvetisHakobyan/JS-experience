// vat lutsman tarberak

// const list1 = document.getElementById("1");
// const list2 = document.getElementById("2");
// const list3 = document.getElementById("3");
// const list4 = document.getElementById("4");
// const list5 = document.getElementById("5");
// const list6 = document.getElementById("6");
// const list7 = document.getElementById("7");


// list1.addEventListener("click" , () => {
//     if(list1.style.textDecoration === "line-through"){
//        return list1.style.textDecoration = "none";
//     } 
//    list1.style.textDecoration = "line-through";
//     }
// )
// let count2 = 1;
// list2.addEventListener("click" , () => {
//     if(list1.style.textDecoration === "line-through" && count2 % 2 !== 0){
//         count2  += 1;
//         list2.style.textDecoration = "line-through";
//     } else if(list2.style.textDecoration === "line-through" && count2 % 2 === 0){
//         count2 +=1;
//         list2.style.textDecoration = "none"
//     }
//     }
// )
// let count3 = 1;
// list3.addEventListener("click" , () => {
//     if(list2.style.textDecoration === "line-through" && count3 % 2 !== 0){
//         count3  += 1;
//         list3.style.textDecoration = "line-through";
//     } else if(list3.style.textDecoration === "line-through" && count3 % 2 === 0){
//         count3 +=1;
//         list3.style.textDecoration = "none"
//     }
//     }
// )
// let count4 = 1;
// list4.addEventListener("click" , () => {
//     if(list3.style.textDecoration === "line-through" && count4 % 2 !== 0){
//         count4  += 1;
//         list4.style.textDecoration = "line-through";
//     } else if(list4.style.textDecoration === "line-through" && count4 % 2 === 0){
//         count4 +=1;
//         list4.style.textDecoration = "none"
//     }
//     }
// )
// let count5 = 1;
// list5.addEventListener("click" , () => {
//     if(list4.style.textDecoration === "line-through" && count5 % 2 !== 0){
//         count5  += 1;
//         list5.style.textDecoration = "line-through";
//     } else if(list5.style.textDecoration === "line-through" && count5 % 2 === 0){
//         count5 +=1;
//         list5.style.textDecoration = "none"
//     }
//     }
// )
// let count6 = 1;
// list6.addEventListener("click" , () => {
//     if(list5.style.textDecoration === "line-through" && count6 % 2 !== 0){
//         count6  += 1;
//         list6.style.textDecoration = "line-through";
//     } else if(list6.style.textDecoration === "line-through" && count6 % 2 === 0){
//         count6 +=1;
//         list6.style.textDecoration = "none"
//     }
//     }
// )
// let count7 = 1;
// list7.addEventListener("click" , () => {
//     if(list6.style.textDecoration === "line-through" && count7 % 2 !== 0){
//         count7  += 1;
//         list7.style.textDecoration = "line-through";
//     } else if(list7.style.textDecoration === "line-through" && count7 % 2 === 0){
//         count7 +=1;
//         list7.style.textDecoration = "none"
//     }
//     }
// )


// aveli optimal lutsum
let items = document.querySelectorAll(".item");
for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function(){
        if(i === 0 && items[i].style.textDecoration !== "line-through" ){
         items[i].style.textDecoration = "line-through";
        } else if(i === 0) {
        items[i].style.textDecoration = "none";
}})

    items[i].addEventListener('click', function (){
        if(i !== 0 && items[i-1].style.textDecoration === "line-through" &&  items[i].style.textDecoration !== "line-through"){
            items[i].style.textDecoration = "line-through";
        } else if(i !== 0){
            items[i].style.textDecoration = "none";
        }
    })

}

