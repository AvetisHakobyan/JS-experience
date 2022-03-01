//// write a recursive function to determine whether all digits of the number are odd or not

// tarberak 1(sahmanachap ka)

// function areOdd(number) {
//     if (number === 0) {

//         return false;
//     } else if (number === 1) {

//         return true;
//     } else if (number > 0) {
//         return areOdd(number - 2);
//     } else {
//         return areOdd(-number);
//     }

// }


// console.log(areOdd(42));

//// tarberak 2 (sahmanachap chuni)

// function allOdd (number) {
//     if(number < 0) {
//         return allOdd(-number);
//     }
//     if(number % 2 === 0){
//         return false;
//     }
//     number = Math.floor(number/10);
//     if(number != 0 ){
//         return allOdd(number);
//     } else {
//            return true;
//     }

// }

// console.log(allOdd(11133));

//// 2. Given an array of numbers.Write a recursive function to find its minimal positive element.
////(if such element does not exist ,return -1)

//lutsum aranc recursion


// function getSmallestPositivNumber(arr) {
//    let smallestNumber = Infinity;
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < smallestNumber && arr[i] >= 0) {
//          smallestNumber = arr[i];
//       }
//    }
//    if (smallestNumber === Infinity) {
//       smallestNumber = -1;
//    }
//    return smallestNumber;
// }
//

//// lutsum recursionov

// function getSmallestPositivNumber(arr,theSmallestNumber) {

//    if(arr.length === 0 && theSmallestNumber === Infinity ){
//       return -1;
//    } else if(arr.length === 0){
//       return theSmallestNumber;
//    }

//    if(arr[0] >= 0 && arr[0] < theSmallestNumber ){
//       theSmallestNumber = arr[0];
//       arr.splice(0,1);
//      return getSmallestPositivNumber(arr,theSmallestNumber);
//    } else  {
//       arr.splice(0,1);
//      return getSmallestPositivNumber(arr,theSmallestNumber);
//    }


//   }

// console.log(getSmallestPositivNumber([-4,-5,-1],Infinity));


// aranc 2ord argument lutsum

// function getSmallestPositivNumber(arr) {
//   if (arr.length === 0) {
//     return -1;
//   } else if (arr.length === 1 && arr[0] >= 0) {
//     return arr[0];
//   } else if (arr.length === 1) {
//     arr.splice(0, 1);
//     return getSmallestPositivNumber(arr);
//   }
//   if ((arr[0] >= 0 && arr[1] >= 0 && arr[0] >= arr[1]) || arr[0] + arr[1] < arr[1]) {
//     arr.splice(0, 1);
//     return getSmallestPositivNumber(arr);
//   } else if ((arr[0] >= 0 && arr[1] >= 0 && arr[0] <= arr[1]) || arr[0] + arr[1] < arr[0]) {
//     arr.splice(1, 1);
//     return getSmallestPositivNumber(arr);
//   }

// }



// console.log(getSmallestPositivNumber([1, 2, -1, 0, 85]));


//// 3 Given an array of numbers which is almost sorted in ascending order.
//// Find the index where sorting order is violated

// function ascendingArrayViolateIndexFinder (arr){
//   for(let i = 0; i < arr.length;i++ ){
//      if(arr[i] > arr[i+1]){
//          return i;
//      }
//   }
//   return -1;
//  }

// console.log(ascendingArrayViolateIndexFinder([1,2,3,4,5,6,]))

//// ex.4 GIven an array.Write a recursive function that removes the first element and returns the given array.

// let getArraywithoutFirstIndex = (arr) => {
//     if (arr[0] === undefined) {
//         arr.splice(0, 1);
//         return arr;
//     }
//     arr[0] = undefined;

//     return getArraywithoutFirstIndex(arr);
// }


// console.log(getArraywithoutFirstIndex([545, 28, 62]));

//// ex 5. Given an array of nested arrays.Write a recursive function that flattens it.

// function flatternAllNestedArray (arr) {
//     let newArr = [];
//     function concatter (arrConc) {
//     for(let i = 0 ; i < arrConc.length; i++){
//         if(Array.isArray(arrConc[i])) {
//            concatter(arrConc[i]);
            
//          } else {
//              newArr.push(arrConc[i]);
//          }
// }
//     }
//     concatter(arr);
//   return newArr;
// }


// console.log(flatternAllNestedArray([12,1,[123],[4,[6,7,[8,9]]]])); 


//// ex.6 Given a number.Write a function that calculates its sum of the digits and if that sum has more than 1 digit
// find the sum of gigits of that number.
// Repeat that process if needed and return the result.

// function numDigitSum (num) {
//   let strNum  = () => num.toString().split("").reduce((acc,item) => {
//         return acc + +(item);
//   },0).toString();
   
//   if(strNum().length > 1){
//    return numDigitSum(+strNum());
//   } else {
//     return +strNum();
//   }
  
  
  
// }


// console.log(numDigitSum(289));

//// ex 7 deep copy of object with recursion

// let obj = {
//     name: "Avetis",
//     age: 26,
//     run(){
//         alert(`${this.name} runs 3 km in a day with ${this.friends[0]} and ${this.friends[1]}`)
//     },
//     friends : ["Ashot","Hon"]
    
// }
// const recursiveDeepCopyFunction = (object) => {
//     let newObject, value, key
  
//     if (typeof object !== "object" || object === null) {
//         return object;
//     }
    
//     newObject = Array.isArray(object) ? [] : {}
  
//     for (key in object) {
//       value = object[key];
  
     
//       newObject[key] = recursiveDeepCopyFunction(value);
//     }
  
//     return newObject
//   }


//  console.log(recursiveDeepCopyFunction(obj));


////ex 8 debounce-i orinak

// let arr = ["Vazgen", "Artur","Davit","Anna","Karen","Karlen","Anahit"]
// let input = document.querySelector("input");
// let root = document.querySelector("#root")
// let searchText = "";
// input.addEventListener("keyup", () =>{
//     searchText = input.value.toLowerCase();
    
//     refresh();
// })
// let id;
// let count = 0;
// function refresh () {
    
//         clearTimeout(id);
        
    
//    id = setTimeout(render,500);
  
// }

// function render() {
//     root.innerText="";
// arr.filter((name) => {
//  return name.toLowerCase().includes(searchText);
// })
// .map(name => {
//     let div = document.createElement("div");
//      div.innerText = name;
//      return div;
// }).forEach(el => {
    
//     root.appendChild(el);
    
// });

// }

// render();

//// debounce orinak 2 




// let input = document.querySelector("input");
// change = debounce(change,1000);
// input.addEventListener("keyup", change);


// function change (e) {
//     console.log(e.target.value);
// }

// function debounce (func, ms) {
//     let id;
//     return function () {
//         const funcCall = () => func.apply(this,arguments);
//         clearTimeout(id);

//         id = setTimeout(funcCall,ms);
//     }
// }







