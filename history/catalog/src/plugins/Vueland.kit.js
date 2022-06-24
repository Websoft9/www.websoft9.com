import BootstrapVue from "bootstrap-vue";
import VueLazyload from "vue-lazyload";
import VueMeta from "vue-meta";
import { BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import "@/assets/styles/sass/themes/lite-blue.scss";

// locale.use(lang);

export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.use(BootstrapVueIcons);
    Vue.use(VueMeta, {
      keyName: "metaInfo",
      attribute: "data-vue-meta",
      ssrAttribute: "data-vue-meta-server-rendered",
      tagIDKeyName: "vmid",
      refreshOnceOnNavigation: true
    });
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: "0px",
        threshold: 0.1
      }
    });
  }
};
