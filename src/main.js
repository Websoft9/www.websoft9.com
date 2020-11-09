// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/style/custom.scss'
import Vue from 'vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = true;

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  //Vue.component('Layout', ChineseLayout)
  //Vue.component('Layout', EnglishLayout)
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  Vue.component('font-awesome', FontAwesomeIcon)
}
