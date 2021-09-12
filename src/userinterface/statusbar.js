UserInterface.model({
	name: "statusbar",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "padding-xs",
		style: "display:none; grid-auto-flow: column; background-color: #F5F6F7",
		children: [
			{
				tagName: "div",
				className: "mousePosition grid-gap-xxs",
				style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content; place-items: center",
				children: [
					{
						tagName: "img",
						src: "./resource/image/move.png"
					},
					{
						tagName: "div"
					}
				]
			},
			{
				tagName: "div",
				className: "vertical-separator"
			},
			{
				tagName: "div",
				className: "shapeSize grid-gap-xxs",
				style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content; place-items: center",
				children: [
					{
						tagName: "img",
						src: "./resource/image/size.png"
					},
					{
						tagName: "div"
					}
				]
			},
			{
				tagName: "div",
				className: "vertical-separator"
			},
			{
				tagName: "div",
				className: "canvasSize grid-gap-xxs",
				style: "display: grid; grid-auto-flow: column; grid-auto-columns: max-content; place-items: center",
				children: [
					{
						tagName: "img",
						src: "./resource/image/size.png"
					},
					{
						tagName: "div"
					}
				]
			},
			{
				tagName: "div",
				className: "vertical-separator"
			}
		]
	}
})
