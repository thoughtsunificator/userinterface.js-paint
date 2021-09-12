UserInterface.model({
	name: "toolbar",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "toolbar",
		style: "background-color: white",
		children: [
			{
				tagName: "div",
				style: "display:grid; grid-auto-flow: column; grid-auto-columns: max-content",
				children: [
					{
						tagName: "div",
						className: "menus",
						style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content"
					},
					{
						tagName: "div",
						className: "tabs grid-gap-xxs",
						style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content"
					}
				]
			},
			{
				tagName: "div",
				className: "tab-content"
			}
		]
	}
})
