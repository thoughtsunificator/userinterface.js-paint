UserInterface.model({
	name: "toolbox",
	method: UserInterface.appendChild,
	callback: toolbox => ({
		tagName: "div",
		className: "display-grid grid-gap toolbox padding-xs",
		children: [
			{
				tagName: "div",
				className: "tools grid-gap-xxs",
				style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content; place-items: center; place-content: center"
			},
			{
				tagName: "div",
				textContent: toolbox.name
			},
		]
	})
})
