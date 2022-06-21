let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

let result = [];
let ctr = 0;
let x = 0;
// điều kiện dừng là ctr = độ dài mảng ngắn hơn
while(ctr < array1.length && ctr < array2.length) {
  result.push(array1[ctr] + array2[ctr]);
  ctr++;
}
console.log(ctr, "ctr")
console.log(result, "result 1");
if(ctr === array1.length) {
  for(x = ctr; x < array2.length; x++) {
    result.push(array2[x])
  }
} else {
  for(x = ctr; x < array1.length; x++) {
    result.push(array1[x])
  }
}

console.log(result);