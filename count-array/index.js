let array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count = 1;
let m = 0;
let item;

for(let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if(array[i] == array[j]) {
      m++
    }
    if(count < m) {
      count = m;
      item = array[i]
    }
  }
  m = 0;
}

console.log(item + " xuất hiện " + count + " lần");
