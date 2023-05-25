// 多种可能需要判断的时候
let status = 6
if(status === 0 || status === 1 || status === 2 || status === 3) {
  console.log('按钮可以点击');
}
// =>

if([0, 1, 2, 3].includes(status)) {
  console.log('按钮可以点击');
}else{
  console.log ("没有用啊")
}
