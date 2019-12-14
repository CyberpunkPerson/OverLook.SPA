import Vue from "vue";
import Vuex from "vuex";

import errorHandler from "@store/modules/errorHandler"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    errorHandler
  }
});