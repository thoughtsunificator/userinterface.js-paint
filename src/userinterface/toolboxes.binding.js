UserInterface.bind("toolboxes", async function(element, paint, tab) {

	UserInterface.listen(paint, "tab set", function(name) {
		if(name === tab.name) {
			element.style.display = "grid"
		} else {
			element.style.display = "none"
		}
	})

	for(let toolbox of tab.toolboxes) {
		await UserInterface.runModel("toolbox", {parentNode: element, bindingArgs: [paint, toolbox], data: toolbox})
	}

})
