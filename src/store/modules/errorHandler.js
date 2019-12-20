import store from "@store";

import { THROW_ERROR, CLOSE_ERROR_DIALOG } from "@store/actions/errors";
import { AUTH_REQUIRED } from "@store/actions/navigation"
import { AUTH_ERROR } from "@store/actions/security"

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
    console.error(error);

    if (state.error.response.status == 401) {
      store.commit(AUTH_REQUIRED);
      return;
    } else if (state.error.response.status == 403) {
      store.commit(AUTH_ERROR);
    }

    state.exceptionDialog = true;
  },
  [CLOSE_ERROR_DIALOG]() {
    state.exceptionDialog = false;
  }
};

export default {
  state,
  getters,
  mutations
};
