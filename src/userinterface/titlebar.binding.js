UserInterface.bind("titlebar", async function(element, paint) {

	const titleNode = element.querySelector(".title")

	UserInterface.listen(paint, "title set", (title) => {
		if(title === null) {
			titleNode.textContent = "Untitled"
		} else {
			titleNode.textContent = title
		}
	})

	element.querySelector(".save").addEventListener("click", function() {
		UserInterface.announce(paint, "save")
	})

})
