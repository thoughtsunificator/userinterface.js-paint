UserInterface.bind("toolbox", async function(element, paint, toolbox) {

	const toolsNode = element.querySelector(".tools")

	for(let control of toolbox.controls) {
		await UserInterface.runModel(control.model, {parentNode: toolsNode, bindingArgs: [paint, control], data: control.attributes})
	}

})
