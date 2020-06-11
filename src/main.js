// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Meta from 'vue-meta';


import MaterialKit from "./plugins/material-kit";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// // import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import VueCarousel from '@chenfengyuan/vue-carousel';
import vueScrollto from 'vue-scrollto';
// import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
// import VueGallerySlideshow from "vue-gallery-slideshow";
Vue.use(Meta);
Vue.use(MaterialKit);
// Vue.use(VueGallerySlideshow);
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
Vue.use(VueMaterial);
Vue.use(VueCarousel);
Vue.use(vueScrollto);

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyCX3652GkMCGxDdPL8eaJzduvnmQGMUvZc",
//     libraries: "places" // necessary for places input
//   }
// });

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
