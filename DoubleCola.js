function whoIsNext(names, r){
  //your code here
  var str_length = names.length;
  var arr = [];
  for(let i = 0;i<31;i++){
    arr.push(Math.pow(2,i));
  }
  var l = 0;
  while(r-arr[l]*str_length>0){
  	r-=arr[l]*str_length;
  	l++;
  }
  return names[Math.ceil(r/arr[l])-1];

}



console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard");