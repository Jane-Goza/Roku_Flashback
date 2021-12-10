export default {
    name: 'imageGallery',
    props: ["piece"],

    methods: {
        openModal(image) {
            console.log(image);
            this.$store.commit('setModalImage', image);
            this.$store.commit('setModalOpen', true);
        },
        closeModal() {
            this.$store.commit('setModalOpen', false);
        }

},
    template: `
    <div class="image-gallery">
            <div class="image-gallery__image" v-for="image in piece.images" :key="image.id" @click="openModal(image)">
                <img :src="got.jpg" alt="">`
}