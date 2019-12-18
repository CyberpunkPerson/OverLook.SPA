import store from "@store";

import { THROW_ERROR } from "@store/actions/errors";
import { AUTHORIZATION_REQUIRED } from "@store/actions/navigation"

const state = {
  exceptionDialog: false,
  error: null
};

const getters = {
  isExceptionDialog: state => state.exceptionDialog,
  getErrors: state => state.error
};

const mutations = {
  [THROW_ERROR](state, error) {
    state.error = error;

    if (state.error.response.status == 401) {
      store.commit(AUTHORIZATION_REQUIRED);
    } else {
      state.exceptionDialog = !state.exceptionDialog;
    }
  }
};

export default {
  state,
  getters,
  mutations
};
