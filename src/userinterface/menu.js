UserInterface.model({
	name: "menu",
	method: UserInterface.appendChild,
	callback: menu => ({
		tagName: "div",
		className: "padding-vertical-2xs padding-horizontal-xl button",
		style: "background-color: #1979CA; color: white; position: relative",
		textContent: menu.name,
		children: [
			{
				tagName: "div",
				className: "links border-width-1",
				style: "position: absolute; display: none; background-color: #F6F7F8; top: 0; left: 0; z-index: 1; color: black; border-style: solid; border-color: #8492A6",
				children: [
					{
						tagName: "div",
						className: "border-width-1 border-bottom",
						style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content; border-style: solid; border-color: #8492A6",
						children: [
							{
								tagName: "div",
								className: "padding-vertical-2xs padding-horizontal-xl button",
								style: "background-color: #1979CA; color: white",
								textContent: menu.name
							},
							{
								tagName: "div",
								style: "background-color: #F6F7F8"
							}
						]
					}
				]
			}
		]
	})
})
