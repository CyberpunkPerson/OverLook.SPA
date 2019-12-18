import { AUTHORIZATION_REQUIRED } from "@store/actions/navigation";

const state = {
    authDialog: false,
};

const getters = {
    isAuthDialog: state => state.authDialog,
};

const mutations = {
    [AUTHORIZATION_REQUIRED](state) {
        state.authDialog = !state.authDialog;
    }
};

export default {
    state,
    getters,
    mutations
};

