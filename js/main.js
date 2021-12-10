import { getData} from './compontents/TheDataMiner.js';

import  imageGallery from './compontents/imageGallery.js';
import Header from './components/Header'
import Footer from './components/Footer'
import MenuBtn from './compomemts/MenuBtn'

(() => {

    const myVue = new Vue({
      create: function () {
        getData(null, (data) => {
          this.data = data.filter(item => item.gallery === "true")
        });
      },
        data: {
          data: [],
          currentItem: {}
        },

        methods: {
          changeContent(item) {
            this.currentItem = item;
          },
        },

        components: {
            tile: imageGallery,
            modal: modal,
        }

    }).$mount("#app");


})();