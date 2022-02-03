import "./common.css";

function printHello() {
    const element = document.createElement("div");

    element.innerHTML = "<h1>Hello Webpack Dev Server</h1>";

    console.log("LOG!!!");
    return element;
}

document.body.appendChild(printHello());