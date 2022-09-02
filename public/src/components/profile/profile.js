class MyProfile extends HTMLElement{

    static get observedAttributes(){
        return["pp","name","age","location","info","distance"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    
    }

    connectedCallback(){
        this.mount();
    }

    attributeChangedCallback(propName,oldValue,newValues){
        this[propName] = newValues;
        this.mount();
    }

    mount(){
        this.render();
    }
    render(){
        console.log('render');
        this.shadowRoot.innerHTML = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./src/components/profile/style.css">

       <img src="img/rectangulo1.png" height="550" weight="550" class="rectangulo1"> 
       <img src=${this.pp} height="440" class="pp1">
       <img src="img/template1.png" height="550"class="template1">
       
       
    
       <p class="P1" >
        <b>${this.name} &nbsp; ${this.age}</b>
        <br>
        ${this.location}
        <br>
        ${this.info}
        <br>
        ${this.distance}
        </p>
       
      
        `
    }
}
customElements.define("my-profile",MyProfile);
export default MyProfile;
