import "./common.css";

function printHello() {
    const element = document.createElement("div");

    element.innerHTML = "<h1>Hello Webpack</h1>";

    return element;
}

document.body.appendChild(printHello());