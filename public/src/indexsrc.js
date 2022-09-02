import * as components from "./components/indexcom.js"
import data from "./components/data.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((element)=> {
            this.shadowRoot.innerHTML += `
            <my-profile pp= "${element.pp}" name= "${element.name}" age= "${element.age}" location= "${element.location}" info= "${element.info}" distance= "${element.distance}"></my-profile>
            <my-counter></my-counter>
            `
        });

       
    }
}

customElements.define('app-container', AppContainer);