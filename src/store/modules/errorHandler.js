import { THROW_ERROR } from "@store/actions/errors";

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
    state.exceptionDialog = !state.exceptionDialog;
  }
};

export default {
  state,
  getters,
  mutations
};
