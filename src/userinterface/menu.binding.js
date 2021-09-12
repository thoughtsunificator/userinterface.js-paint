UserInterface.bind("menu", async function(element, paint, menu) {

	const linksNode = element.querySelector(".links")

	let opened = false

	window.addEventListener("click", (event) => {
		if(event.composedPath().includes(element) === false && opened === true) {
			linksNode.style.display = "none"
			opened = false
		}
	})

	element.addEventListener("click", () => {
		if(opened === true) {
			linksNode.style.display = "none"
			opened = false
		} else {
			linksNode.style.display = "grid"
			opened = true
		}
	})

	for(const link of menu.links) {
		await UserInterface.runModel("menu_link", {parentNode: linksNode, bindingArgs: [paint, link], data: link})
	}

})
