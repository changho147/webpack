function printComponent() {
	const element = document.createElement("div");

	element.innerHTML = "<h1>Hello Webpack Entries</h1>";

	return element;
}

document.body.appendChild(printComponent());