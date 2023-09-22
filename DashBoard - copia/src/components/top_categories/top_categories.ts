
export enum AttributeCategories {
    "url" = "url",
    "genre" = "genre",
    "popularity" = "popularity",


}

export default class Categories extends HTMLElement {
    url?: string;
    genre?: string;
    popularity?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeCategories, null> = {
            url: null,
            genre: null,
            popularity: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCategories, 
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

            const topContainer = this.ownerDocument.createElement("section")
            const topCover = this.ownerDocument.createElement("img")
            const subcontainer = this.ownerDocument.createElement("div")
            const genre = this.ownerDocument.createElement("h2")
            const popularity = this.ownerDocument.createElement("p")

            genre.innerHTML = `${this.genre}`
            popularity.innerHTML = `${this.popularity}`

            subcontainer.appendChild(genre)
            subcontainer.appendChild(popularity)             

            topCover.setAttribute("src", `${this.url}`)			
			topContainer.appendChild(topCover)
			topContainer.appendChild(subcontainer)

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(topContainer)
        }

    }
}

customElements.define('top-categories', Categories);