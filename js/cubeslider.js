var initCubeSlider = function(ops){
	var n = 5 / 0
	var o = Object.assign({
				row: 2,
				col: 3,
				size: 100,
				interval: 2500,
				delay: 50,
				transition: 500,
				controls: false
			}, ops)
	
	var size = o.size
	var height = o.row * size
	var width = o.col * size
	
	var el = document.querySelector(o.el)
	el.style.height = height + "px"
	el.style.width = width + "px"
	
	var len = o.slides.length
	if(!len) return
	len = len < 7 ? len : 6
	
	var styles = [
		["translateZ(", "px)"],
		["translateZ(-", "px) rotateY(-90deg)"],
		["translateZ(-", "px) rotateY(180deg)"],
		["translateZ(-", "px) rotateY(90deg)"],
		["translateZ(-", "px) rotateX(90deg)"],
		["translateZ(-", "px) rotateX(-90deg)"]
	]
	
	var count = 1
	var render = undefined
	var showNext = function(){
		count++
		if(count > len){
			count = 1
		}
		var prev = count === 1 ? len : count - 1
		el.classList.remove("slide-" + prev)
		el.classList.add("slide-" + count)
	}
	var showPrev = function(){
		var prev = count === 1 ? len : count - 1
		el.classList.remove("slide-" + count)
		el.classList.add("slide-" + prev)
		count--
		if(count < 1){
			count = len
		}
	}
	var runSlider = function(){
		render = setInterval(showNext, o.interval)
	}
	
	var addControls = function(){
		var panel = document.createElement('div')
		panel.classList.add("ctrl-panel")
		
		var lctrl = document.createElement('span')
		lctrl.classList.add('ctrl')
		lctrl.classList.add('left')
		lctrl.addEventListener('click', function(){
			if(len === 1) return
			clearInterval(render)
			showPrev()
			render = setInterval(showNext, o.interval)
		})
		panel.appendChild(lctrl)
		
		var rctrl = document.createElement('span')
		rctrl.classList.add('ctrl')
		rctrl.classList.add('right')
		rctrl.addEventListener('click', function(){
			if(len === 1) return
			clearInterval(render)
			showNext()
			render = setInterval(showNext, o.interval)
		})
		panel.appendChild(rctrl)
		
		el.appendChild(panel)
	}
	
	var createCube = function(num, row, col){
		var cube = document.createElement('div')
		cube.classList.add('cube')
		cube.style.height = size + "px"
		cube.style.width = size + "px"
		cube.style.transition = "transform " + (o.transition / 1000) + "s"
		for(var i = 0; i < num; i++){
			var side = document.createElement('div')
			if(size !== 100){
				side.style.height = size + "px"
				side.style.width = size + "px"
				side.style.transform = styles[i][0] + (size / 2) + styles[i][1]
			}
			side.style.backgroundImage = "url(" + o.slides[i] + ")"
			side.style.backgroundSize  = (o.col * size) + "px " + (o.row * size) + "px"
			side.style.backgroundPosition = "-" + (col * size) + "px -" + (row * size) + "px"
			side.classList.add('side')
			cube.appendChild(side)
		}
		return cube
	}
	
	var init = function(){
		var c = 0
		for(var i = 0; i < o.row; i++){
			for(var j = 0; j < o.col; j++){
				var cube = createCube(len, i, j)
				cube.style.transitionDelay = (c * (o.delay / 1000)) + "s"
				el.appendChild(cube)
				c++
			}
		}
		
		if(o.controls){
			addControls()
		}
		if(len > 1){
			runSlider()
		}
	}
	init()
}