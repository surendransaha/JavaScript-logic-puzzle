console.log('Start');

process.nextTick(() => {
console.log('process.nextTick');
});

setTimeout(() => {
console.log('setTimeout');
}, 0);

setImmediate(() => {
console.log('setImmediate');
});

console.log('End');
