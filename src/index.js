import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
// import store from '/store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import routers from '@router/routes.config'

Vue.use(Vuetify)

new Vue({
    el:'#app',
    router:routers,
    // store,
    render: h => h(App)
})