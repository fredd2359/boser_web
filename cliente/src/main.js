// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import VueJsonLD from 'vue-jsonld'
import VueYoutubeEmbed from 'vue-youtube-embed'
// import VueFacebookPage from 'vue-facebook-page'
import VueSocialSharing from 'vue-social-sharing'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueSocialSharing)
Vue.use(VueYoutubeEmbed)

Vue.use(VueJsonLD)
// Vue.use(VueFacebookPage, 2824909654304731)
Vue.use(VueMeta)

// Vue.use(vuetify)
sync(store, router)

new Vue({
  vuetify,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
