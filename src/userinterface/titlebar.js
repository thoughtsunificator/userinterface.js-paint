UserInterface.model({
	name: "titlebar",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "grid-gap padding-vertical-2xs",
		style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content; place-items: center; background-color: white",
		children: [
			{
				tagName: "img",
				src: "./resource/image/favicon.png"
			},
			{
				tagName: "div",
				className: "vertical-separator"
			},
			{
				tagName: "div",
				className: "links grid-gap",
				style: " display: grid; grid-auto-flow: column; grid-auto-columns: max-content",
				children: [
					{
						tagName: "img",
						className: "save",
						src: "./resource/image/save.png"
					},
					{
						tagName: "img",
						className: "undo",
						src: "./resource/image/undo_disabled.png"
					},
					{
						tagName: "img",
						className: "redo",
						src: "./resource/image/redo_disabled.png"
					}
				]
			},
			{
				tagName: "div",
				className: "vertical-separator"
			},
			{
				tagName: "div",
				className: "grid-gap-xxs",
				style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content",
				children: [
					{
						className: "title",
						tagName: "div",
						textContent: "Untitled"
					},
					{
						tagName: "div",
						textContent: "-"
					},
					{
						tagName: "div",
						textContent: "userinterface.js-paint"
					}
				]
			},
		]
	}
})
