
export enum AttributeBestSeller {
    "name" = "name",
    "author" = "author",
    "tags" = "tags",
    "info" = "info",
    "url" = "url",
}

export default class BestSeller extends HTMLElement {
    name?:string;
    author?:string;
    tags?:string;
    info?:string;
    url?:string;

    static get observedAttributes(){
        const attrs: Record <AttributeBestSeller, null> = {
            name: null,
            author: null,
            tags: null,
            info: null,
            url: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeBestSeller, 
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

            const Container = this.ownerDocument.createElement("section")
            const Cover = this.ownerDocument.createElement("img")
            const textContainer = this.ownerDocument.createElement("div")
            const name = this.ownerDocument.createElement("h3")
            const author = this.ownerDocument.createElement("h3")
            const tags = this.ownerDocument.createElement("h3")
            const info = this.ownerDocument.createElement("p")
            
            const button = this.ownerDocument.createElement('button');
                button.innerText = `view more`

            name.innerHTML = `${this.name}`
            author.innerHTML = `${this.author}`
			tags.innerHTML = `${this.tags}`
            info.innerHTML = `${this.info}`

            textContainer.appendChild(name)
            textContainer.appendChild(author)
            textContainer.appendChild(tags)
            textContainer.appendChild(info)             

            Cover.setAttribute("src", `${this.url}`)			
			Container.appendChild(Cover)
			Container.appendChild(textContainer)

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(Container)
        }

        
    }
}

customElements.define('bestseller-containe', BestSeller);