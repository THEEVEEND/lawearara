
// export enum Attribute {
//     "ussername" = "ussername",
//     "img" = "img"
// }

// export default class  extends HTMLElement {
//     ussername?: string;
//     img?: string;

//     static get observedAttributes(){
//         const attrs: Record <Attribute, null> = {
//             ussername: null,
//             img: null,
//         }
//         return Object.keys(attrs);
//     }

//     attributeChangedCallback(
//         propName: Attribute, 
//         _: string | undefined, 
//         newValue: string | undefined){
//             switch (propName) {
//                 default:
//                 this[propName] = newValue;
//                 break;
//             }
//         }

//     constructor(){
//         super();
//         this.attachShadow({mode: "open"});
//     }

//     connectedCallback(){
//         this.render();
//     }

//     render(){

//     }
// }

// customElements.define('',);