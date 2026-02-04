 function  customRender(reactElement , container){
    /*
      const domElement = document.createElement(reactElement.type);

      domElement.innerHTML = reactElement.children
      domElement.setAttribute('href', reactElement.props.href)
      domElement.setAttribute('target',reactElement.props.target)

      container.appendChild(domElement)
      */
    // second way
      const domElement = document.createElement(reactElement.type)
      domElement.innerHTML = reactElement.children 
      for (const prop in reactElement.props) {
          if (prop == 'children') continue;
          domElement.setAttribute(prop, reactElement.props[prop])
      }
      container.appendChild(domElement)
 }

const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector('#root')


         // Argument 1: What to render (The object).
        // Argument 2: Where to render (The #root div in your HTML).

customRender(reactElement, mainContainer)