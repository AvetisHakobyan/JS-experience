//// my filter function

// function myFilter (arr, func) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//        if(func(arr[i])){
//            newArr.push(arr[i]);
//        }

//     }
//     return newArr;
// }


// console.log(myFilter([1,2,3,4],function (item) {
//   return  item % 2 === 0;
// }))

//// my map function

// function myMap (arr, func) {
//   const newArr = [];
//   arr.forEach((val,index,array) => newArr.push(func(val,index)));
//     return newArr;
// }


// console.log(myMap([1,2,3,4], (val, index, array) => val + index ));

//// my reduce function

// function myReduce (arr, func, accum) {

//     arr.forEach(val => {
//       if(accum === undefined){
//        return accum = val;
        
//       }
//       accum = func(accum,val);
//     })

//     return accum;
// }


// console.log(myReduce([1,2,3,4],(acc, val, index, curArray) => acc + val, ));

//// my find function

// function myFind (arr, func) {
//   let foundedNumber = undefined;
//    for(let i = 0 ; i < arr.length; i++) {
//      if(func(arr[i],i)){
//       foundedNumber = arr[i]; 
//       return foundedNumber;
//      }
//    }
    
//      return foundedNumber;
   
  
// }


// console.log(myFind([3,1,4,2,3,460], (val,index,array) => val + index > 50))

//// my concat function 

// function myConcat () {
//   let i = 0;
//   let newArr = [];
//   while(i < arguments.length){
//     if (Array.isArray(arguments[i])){
//        newArr.push(...arguments[i]);
//        i++;
//     } else {
//       newArr.push(arguments[i]);
//       i++;
//     }
//   }
 
 
    
  
//     return newArr;
// }

// console.log(myConcat(65,45,28,[1,2,3],[4,5,6],7,8,9,101,2,[1,5,9],6));


//// my fill function


// function myFill (arr,fillWith, startIndex, endIndex) {
//  if (startIndex === undefined || typeof startIndex !== "number") {
//     startIndex = 0;
//   } else if (startIndex < 0){
//     startIndex = arr.length + startIndex;
//   }
//   if (endIndex === undefined || typeof endIndex !== "number") {
//     endIndex = arr.length;
//   } else if (endIndex < 0){
//     endIndex = arr.length + endIndex;
//   }
  
//   for(let i = 0; i < arr.length; i++){
//       if(i >= startIndex && i < endIndex){
//         arr[i] = fillWith;
//       }
//     }

//     return arr;
// }


// console.log(myFill([1,2,3,4,58,28,69],"barev",2,10));


//// my findIndex function


// function myFindIndex (arr, func) {
//   let newIndex = -1;
//    for(let i = 0; i < arr.length; i++){
//      if(func(arr[i],i)){
//       return newIndex = i;
//      }
//    }
//    return newIndex;
// }


// console.log(myFindIndex([5,10,20,30,40,5], (val,index,array) => val + index === 5));

////my flat function


// function myFlat(arr,count){
//     if(count === undefined){
//         count = 1;
//     }
//      let newArr = [];
//      function flattener (list, time){
//         for(let i = 0;i < list.length; i++){
//             if(Array.isArray(list[i]) && time){ 
//                 flattener(list[i], time-1);
//             }else {
//                 newArr.push(list[i]);
//             }
//         }
//      }

//      flattener(arr,count);
//      return newArr;
// };

// console.log(myFlat([1,2,3,4,[1,[65],2],2,[45],85],2));


//// check if array is unike or not


// function checkUnikeArray (arr) {
//   let obj = {};
//    for(let i = 0; i<arr.length; i++){
//       if(arr[i] in obj === false){
//         obj[arr[i]] = 1;
        
//       } else {
//         return false
//       }
      
//       }
   
//    return true;
// }

// console.log(checkUnikeArray([1,2,3,4,5,6]));


//// Determine if a word or phrase is an isogram


// function checkIsogram(str) {
//   let obj = {};
//   let strArr = str.split("");
//   for(let i = 0; i < strArr.length; i++){
//     if(strArr[i] in obj === false || strArr[i] === " " || strArr[i] === ","){
//         obj[strArr[i]] = 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkIsogram("uncopyrightable ,   z86  wp"))