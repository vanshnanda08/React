function customRender(reactElement, container) {
    /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    container.appendChild(domElement)
    */
    // making a genrealised code so that all the properties can be set.
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
// this is how react see our html code which is returned by function
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
