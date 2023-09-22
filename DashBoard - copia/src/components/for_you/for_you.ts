
export enum AttributeForyou {
    "name" = "name",
    "author" = "author",
    "url" = "url"
}

export default class ForYou extends HTMLElement {
    name?:string;
    author?:string;
    url?:string

    static get observedAttributes(){
        const attrs: Record <AttributeForyou, null> = {
            name:null,
            author:null,
            url:null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeForyou, 
        _: string | undefined, 
        newValue: string | undefined){
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
        }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/top_categories/top_categories.css")

            const forYouContainer = this.ownerDocument.createElement("section")
            const forYouCover = this.ownerDocument.createElement("img")
            const subcontainer = this.ownerDocument.createElement("div")
            const name = this.ownerDocument.createElement("h2")
            const author = this.ownerDocument.createElement("p")

            name.innerHTML = `${this.name}`
            author.innerHTML = `${this.author}`

            subcontainer.appendChild(name)
            subcontainer.appendChild(author)             

            forYouCover.setAttribute("src", `${this.url}`)			
			forYouContainer.appendChild(forYouCover)
			forYouContainer.appendChild(subcontainer)

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(forYouContainer)
        }

    }
}

customElements.define('for-you', ForYou);