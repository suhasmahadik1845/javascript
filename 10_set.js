let setRoolNums = new Set();
setRoolNums.add(10);
setRoolNums.add(20);
setRoolNums.add(21);
setRoolNums.add(45);
setRoolNums.add(20);
console.log(setRoolNums);

console.log(setRoolNums.size);

setRoolNums.delete(21);
console.log(setRoolNums);

const isAvailable = setRoolNums.has(20);
console.log(isAvailable);

setRoolNums.add(50);
setRoolNums.add(70);

console.log(typeof setRoolNums);

for (const element of setRoolNums) {
    console.log(element);
}