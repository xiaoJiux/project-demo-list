// 多种可能需要判断的时候
let status = 6
if (status === 0 || status === 1 || status === 2 || status === 3) {
  console.log('按钮可以点击');
}
// =>

if([0, 1, 2, 3].includes(status)) {
  console.log('按钮可以点击');
} else {
  console.log("没有用啊")
}
// 如果判断一个条件满足就执行某个函数，则可以利用和运算符&&。
let test1 = false;

function callMethod() {
  console.log('这是对的')
}

// 优化前
if (test1) {
  callMethod();
}
// 优化后
test1 && callMethod();


// for循环
// 优化前
let testData = [1, 2, 3, 4, 5, 6]
for ( let i = 0; i < testData.length; i++ ) {
}

// 优化后
for ( let i in testData ) {
}
// or
for ( let i of testData ) {
}

// 十进制数值指数优化
// 优化前
for ( let i = 0; i < 10000; i++ ) {
}

// 优化后
for ( let i = 0; i < 1e4; i++ ) {
  console.log(i)
}