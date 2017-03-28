var Fibonacci = x => {
	let ans = [0,1];
	for(let i=2;i<75;i++){
		ans[i]=ans[i-1]+ans[i-2];
	}
	return ans[x];
}

console.log(Fibonacci(70))
console.log(Fibonacci(60))
console.log(Fibonacci(50))