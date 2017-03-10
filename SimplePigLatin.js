// Question Description:
// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay


// the first solution
// function pigIt(str){
//   return str.split(' ').map(function(value){
//       var sub_str = value.split('');
//       var i = sub_str.shift();
//       sub_str.push(i);
//       sub_str.push('a');
//       sub_str.push('y');
//       return sub_str.join('');
//       }).join(' ');
// }

// console.log(pigIt('Pig latin is cool'));


// the second solution
function pigIt(str){
  return str.split(' ').map((value) => value.slice(1) + value.slice(0,1) + 'ay').join(' ');
}
console.log(pigIt('Pig latin is cool'));

//字符串对象可以读取但是不能修改；