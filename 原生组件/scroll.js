//dom 目标容器
//speed 运行速度
function Scroll(dom,speed = 60) {
	let top = 0;//滚动高度
	let clock = null;//设置一个空对象
	let height =  dom.offsetHeight;//容器高度

	//滚动函数
	function scroll(){
		clock = setInterval(()=>{
			dom.scrollHeight - dom.scrollTop === height?top = 0 : top++;
			dom.scrollTo(0,top)
		},speed)
	}
	// 清除定时器（停止滚动）
	function clearClock(){
		clearInterval(clock)
	}
	dom.addEventListener('mouseenter',() =>{
		clearClock()
	})
	dom.addEventListener('mouseleave',() =>{
		scroll()
	})
	//默认执行scroll
	scroll()
}
