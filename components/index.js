import Template from "./template.js";

export default class CreateAmogus extends HTMLElement{
    connectedCallback() {
        this.innerHTML = Template.render();
    
        const bodyEdt1 = document.querySelector('#body-editor1')
        const hatEdt1 = document.querySelector('#hat-editor1')
        const hatEdt2 = document.querySelector('#hat-editor2')
        const editBody2 = document.querySelector('#body-editor2')
        
        bodyEdt1.addEventListener("click", this.AddBody);
        hatEdt1.addEventListener("click", this.AddHat);
        hatEdt2.addEventListener("click", this.AddOtherHat);
        editBody2.addEventListener("click", this.AddOtherBody);

    }

    Addbody() {
        const body1 = document.querySelector('#body-1')
        const body2 = document.querySelector('#body-2')
        const stockAmogus = document.querySelector('#stockAmogus')
        if(body1.style.display === "none"){
            body2.style.display = "none";
            body1.style.display = "block";
            stockAmogus.style.display = "none"
            
        } else{
            body1.style.display = "none";
        }
    }

    AddOtherBody() {
        const body1 = document.querySelector('#body-1')
        const body2 = document.querySelector('#body-2')
        const stockAmogus = document.querySelector('#stockAmogus')
        if(body2.style.display === "none"){
            body1.style.display = "none";
            body2.style.display = "block";
            stockAmogus.style.display = "none"
            
        } else{
            body2.style.display = "none";
        }
        console.log('gfgfdgdfggdf');
    }

    AddHat() {
        const hat1 = document.querySelector('#hat-1')
        const hat2 = document.querySelector('#hat-2')
        const stockAmogus = document.querySelector('#stockAmogus')
        if(hat1.style.display === "none"){
            hat2.style.display = "none";
            hat1.style.display = "block";
            stockAmogus.style.display = "none"
            
        } else{
            hat1.style.display = "none";
        }
    }

    AddOtherHat() {
        const hat1 = document.querySelector('#hat-1')
        const hat2 = document.querySelector('#hat-2')
        const stockAmogus = document.querySelector('#stockAmogus')
        if(hat2.style.display === "none"){
            hat1.style.display = "none";
            hat2.style.display = "block";
            stockAmogus.style.display = "none"
        
        } else{
            hat2.style.display = "none";
        }
    }
}

