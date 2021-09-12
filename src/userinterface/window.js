UserInterface.model({
	name: "window",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		style: "height: 100%; display: grid; grid-template-rows: auto 1fr auto",
		children: [
			{
				tagName: "div",
				className: "header"
			},
			{
				tagName: "div",
				className: "padding content",
				style: "background-color: #CFD8E7"
			},
			{
				tagName: "div",
				className: "footer",
				style: "position: relative"
			}
		]
	}
})
