// Question Description:

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:

// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// Beware: r must be without duplicates.


// the first solution 
// function inArray(array1,array2){
//     var ans = [];
//     array1.forEach(function(x,index1){
//         array2.forEach(function(y,index2){
//             for(let j = 0;j<y.length;j++){
//                 let i = 0;
//                 let k = j;
//                 while(x[i]==y[k]){
//                     if(i == x.length-1){
//                         ans.push(x);
//                         return ;
//                     }
//                     i++;
//                     k++;
//                 }
//             }
//         })
//     })
//     let result = [];
//         for(let i=0;i<ans.length;i++){
//             if(result.indexOf(ans[i])==-1){
//                 result.push(ans[i]);
//             }
//         }
//     return result.sort(); 
// }


//the second solution
// function inArray(arr1,arr2){
//     return arr1.filter(function(elementOfArr1){
//         return arr2.some(function(elementOfArr2){
//             return element OfArr2.match(elementOfArr1);
//         })
//     })
// }

//the third solution
var inArray =(arr1,arr2)=>{
    var str = arr2.join(' ');
    return arr1.filter(s => str.indexOf(s) != -1).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2));