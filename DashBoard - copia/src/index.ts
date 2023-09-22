import { Data } from "./data/data";
import { AttributeCategories } from "./components/top_categories/top_categories";
import BestSeller, { AttributeBestSeller } from "./components/Bestseller/bestseller";
import { AttributeForyou } from "./components/for_you/for_you"; 

import * as components from "./components/export"

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const subtitle = this.ownerDocument.createElement("div")
            subtitle.classList.add("container")  

        const BestsellerMap = Data.map((user)=> {
            const bestseller = this.ownerDocument.createElement("div")
            bestseller.setAttribute(AttributeBestSeller.url, `${user.url}`)
            bestseller.setAttribute(AttributeBestSeller.name, `${user.name}`)
            bestseller.setAttribute(AttributeBestSeller.author, `${user.author}`)
            bestseller.setAttribute(AttributeBestSeller.tags, `${user.tags}`)
            bestseller.setAttribute(AttributeBestSeller.info, `${user.info}`)

            return bestseller;
            
            }   
        );

        const section = this.ownerDocument.createElement("section")
        section.classList.add("top10-categories") 
        
        BestsellerMap.forEach((topCategorie) => {
            section.appendChild(topCategorie);
        });

        this.shadowRoot.appendChild(subtitle)
        }
    }
}

customElements.define('app-container', AppContainer)
