UserInterface.bind("menu_link", async function(element, paint, link) {

	element.addEventListener("click", function() {
		UserInterface.announce(paint, link.action)
	})

})
