// Question Description:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number



// the first solution
// function calc(sum){
//    var arr = [];
//    var ans = 1;
//    while(Math.floor(sum/10)){
//       arr.push(sum%10);
//       sum = Math.floor(sum/10);
//    }
//   arr.push(sum);
//   for(let i = 0;i<arr.length;i++){
//     ans *= arr[i];
//   }
//   return ans;
// }

// function persistence(num) {
//    //code me
//    var out = 0;
//    if(Math.floor(num/10)==0){
//       return 0;
//    }
//    while(Math.floor(calc(num)/10)){
//        num = calc(num);
//        out ++;
//    }
//   return out+1;
// }

// console.log(persistence(999));

//the second solution
// function persistence(num){
//   var ans = 0;
//   num = num.toString();
//   while(num.length > 1){
//     ans ++ ;
//     num = num.split('').reduce(((a,b)=>a*b),1).toString();
//   }
//   return ans;
// }

// console.log(persistence(39));

//the third solution
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b)) 
    : 0;
}
console.log(persistence(39));