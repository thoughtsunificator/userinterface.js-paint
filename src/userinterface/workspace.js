UserInterface.model({
	name: "workspace",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "position-relative",
		children: [
			{
				tagName: "img",
				className: "tool",
				style: "width: auto; height: auto; position: absolute; pointer-events: none; display: none"
			}
		]
	}
})
