initCubeSlider({
	el: '.cube-slider',
	interval: 3000,
	delay: 100,
	transition: 500,
	controls: true,
	slides: ["assets/banner/1.jpg", "assets/banner/2.jpg", "assets/banner/3.jpg", "assets/banner/4.jpg", "assets/banner/5.jpg", "assets/banner/6.jpg"]
})

initCubeSlider({
	el: '.slider-2',
	interval: 3000,
	transition: 1000,
	row: 1,
	col: 1,
	size: 300,
	slides: ["assets/spas/1.jpg", "assets/spas/2.jpg", "assets/spas/3.jpg", "assets/spas/4.jpg", "assets/spas/5.jpg", "assets/spas/6.jpg"]
})


window.addEventListener('DOMContentLoaded', function(){
	document.body.removeChild(document.getElementById('loader'))
})