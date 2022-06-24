// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from "vue";
import VueLand from "./plugins/Vueland.kit";
// import on your project (less then 1KB gziped)
import vueSmoothScroll from "vue2-smooth-scroll";



Vue.use(vueSmoothScroll);

Vue.use(VueLand);

Vue.config.productionTip = false;
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

