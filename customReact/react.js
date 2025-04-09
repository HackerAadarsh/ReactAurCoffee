function renderElement(Element, container) {
    // const domElement = document.createElement(Element.type)
    // domElement.innerHTML = Element.children
    // domElement.setAttribute('href', Element.props.href) 
    // domElement.setAttribute('target', Element.props.target)
    // container.appendChild(domElement)



// Second Method 


 const domElement = document.createElement(Element.type);
 domElement.innerHTML = Element.children;
 for (const prop in Element.props) {
    if (prop !== 'children') {
        domElement.setAttribute(prop, Element.props[prop]);
    }
    container.appendChild(domElement);
}
}

const Element = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    }, 
    children: 'Click here to go to Google',
}


const mainContainer = document.querySelector('#root');
renderElement(Element, mainContainer);


