//// my intersection function

// let arr = [1,2,2,1, "barev", 3,];
// let arr1 = [1,2, 4, 5,"barev",3];


// function myIntersection() {
//     if(arguments.length === 1){
//         return arguments[0];
//     }
//     let newArr = [];
//     let obj = {};
//     arguments[0].forEach(item => {
//         if (item in obj === false) {
//             obj[item] = undefined;
//             newArr.push(item);
//         }
//     })

//     return newArr.filter(val => {
//         let count = 0;
//         for (let j = 1; j < arguments.length; j++) {
//             if (!arguments[j].includes(val)) {
//                 break;
//             } else {
//                 count++;
//             }

//         }
//         return count === arguments.length - 1;
//     })
// }


// console.log(myIntersection(arr, arr1, [1,2, 8, 3,"barev"],[1,2,15,20,3,"barev"]));
// console.log(_.intersection(arr, arr1, [1,2, 8, 3,"barev"],[1,2,15,20,3,"barev"]));


// function my pull

// let arrStr = ["a","r","t","a","v",'a',"z","d"];

// function myPull (arr) {
//     for(let i = 1; i < arguments.length; i++){
//         for(let j =0; j < arr.length; j++){
//            if(arguments[i] === arr[j]){
//               arr.splice(j,1);
//            }
//         }
//     }
//   return arr;
// }


// console.log(myPull(arrStr,"a","v"));

//// my function tail

// function myTail (array) {
//  return array.filter((val,index) => index !== 0);
// }

// let arr = [1,0,5];

// console.log(myTail(arr));

//// my take function


// function myTake (arr,index) {
//   if(arguments.length > 2) {
//     index = 1;
//   } else if( index === undefined){
//      index = 1;
//   }
//      return arr.filter((val,i) => {
//         return  i < index;
//      })
// }

// console.log(myTake([1,2,3,4,5],2));







