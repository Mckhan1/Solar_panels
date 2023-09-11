// import './assets/main.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
// Vue.use(Vuex)
app.use(router, VueAxios, axios)
app.use(i18n)

app.use(store)

app.mount('#app')


