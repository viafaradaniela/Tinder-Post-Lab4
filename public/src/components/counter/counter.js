class MyCounter extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: 'open'});
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    static get observedAttributes(){
        return ['count'];
    }

    attributeChangedCallback (propName,oldValue,newValues){
        this[propName] = newValues
        this.mount();
    }


    connectedCallback(){
        this.mount();
    }

    disconnectedCallback (){
        this.removeEventListener();

    }

    mount(){
        this.render();
        this.addEventListener();
    }

    render(){
        console.log('render');
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/counter/styleCounter.css">
        <section class = "counter">
            ${this.count || 0}
        <button class="button"></button>
      
        `;
    }

    removeEventListener(){
        this.shadowRoot.querySelector('button').removeEventListener('click',this.onButtonClicked);
    }

     addEventListener(){
        this.shadowRoot.querySelector('button').addEventListener('click',this.onButtonClicked);
    }

    onButtonClicked(){
        console.log('se clikeo');
        const currentValue = Number(this.getAttribute('count'));
        this.setAttribute('count',currentValue + 1);
    }

}

customElements.define('my-counter',MyCounter)
export default MyCounter;