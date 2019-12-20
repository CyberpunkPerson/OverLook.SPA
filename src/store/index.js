import Vue from "vue";
import Vuex from "vuex";

import errorHandler from "@store/modules/errorHandler"
import authorization from "@store/modules/authorization"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    errorHandler,
    authorization
  }
});