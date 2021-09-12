UserInterface.bind("gridlines", async function(element, paint) {

	UserInterface.listen(paint, "gridlines toggle", function(value) {
		if(value === true) {
			element.style.display = ""
		} else {
			element.style.display = "none"
		}
	})

})
