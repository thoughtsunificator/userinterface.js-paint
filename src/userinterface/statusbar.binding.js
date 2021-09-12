UserInterface.bind("statusbar", async function(element, paint) {

	const canvasSizeNode = element.querySelector(".canvasSize")

	UserInterface.listen(paint, "resizable set size", (size) => {
		canvasSizeNode.children[1].textContent = `${size.width} x ${size.height}px`
	})

	UserInterface.listen(paint, "statusbar toggle", function(value) {
		if(value === true) {
			element.style.display = "grid"
		} else {
			element.style.display = "none"
		}
	})

})
