var maxSequence = function(arr){
  let maxSum = arr[0];
  let ans = 0;
  for(let i=1;i<arr.length;i++){
    if(maxSum<=0){
      maxSum = arr[i]
    }else{
       maxSum += arr[i];
    }
    if(maxSum>=ans){
        ans = maxSum; 
    }
  }
  return ans;
}

console.log(maxSequence([-1,3,-2,9]))