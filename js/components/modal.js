export default {
    name: 'modal',
    props: ["piece"],
    
    template: `
    <section class="modal">
    <h2 class= "modal__title">{{title}}</h2>
    <img :src='"dist/" + piece.image' class="modal__image"  alt="piece.photo">
    <img :src='"dist/" + piece.image' class="modal__image"  alt="piece.photo">
    <img :src='"dist/" + piece.image' class="modal__image"  alt="piece.photo">
    </section> `
    }