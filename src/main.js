// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//import ChineseLayout from '~/layouts/Chinese.vue'
//import EnglishLayout from '~/layouts/English.vue'

import '~/assets/style/custom.scss'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  //Vue.component('Layout', ChineseLayout)
  //Vue.component('Layout', EnglishLayout)
  Vue.use(BootstrapVue)
}
