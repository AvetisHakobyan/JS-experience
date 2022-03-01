 // ex 1 // Given a word and a list of possible anagrams,select the correct sublist.

// function checkStringsAnagram (arr,mainStr) {
//         let newArr = [];
      
//       arr.forEach((val) => {
//         if(val.length === mainStr.length ){
//            let newStr = val.split("").sort().join("");
                
//            let newMainStr = mainStr.split("").sort().join("");
                 
//             if(newStr === newMainStr){
//                 newArr.push(val);
//             }
//         }
//       })
//         return newArr;
//     }
    
    
//  console.log(checkStringsAnagram(["licnep","circular","pupil","nilcpe"],"pencil"));

//Ex. 2 // Write a function which receives two strings and removes appearances of the second string from the first one
//    function removeStr (mainStr, changeStr) {
//      let changeArr = changeStr.split("");
//      let mainArr = mainStr.split("");
//      for(let i = 0; i < changeArr.length;i++){
//           mainArr =  mainArr.map(val => {
//                if(val === changeArr[i] ){
//                    val = "";
                   
//                } 
//                return val;
//            })

           
//      }
//      return mainArr.join("");
//     }

//    console.log(removeStr("This is some text", "s"));

// Ex. 3 Given a sentence with missing words and an array of words.Replace all "_" in a sentence with the words from the array.
// function replaceAll (str, arr) {
//    for(let i = 0; i < arr.length;){
//      return  str.split("").map(val => {
//            if(val === "_"){
//                val = arr[i];
//                i++;
//            }
//            return val;
//        }).join("");
//    }
     
//   }  
  


// console.log(replaceAll("May the _ _ _ _",["Force", "be", "with", "you"]));

// ex.4 // write a function that accepts a string(a sentence) as a parametr and finds the longest word within the string.
//IF there are several words wich are the longest ones,
//print last word

// function theLongestWord (sentense) {
    
//   return sentense.split(" ").reduce((aggr, val)=>{
//       if(val.length >= aggr.length){
//           return val;
//       }
//       return aggr;
//   },"")
// }

// console.log(theLongestWord("A revolution without dancing is a revolution not worth having"));