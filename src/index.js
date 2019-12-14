import Vue from "vue";
import vuetify from "@plugins/vuetify";
import App from "./App";
import store from '@store'
import { Api } from "@plugins/axios.config";
import router from "@router/routes.config";

Vue.prototype.$api = Api;

new Vue({
  el: "#app",
  router,
  vuetify,
  store,
  render: h => h(App)
});
