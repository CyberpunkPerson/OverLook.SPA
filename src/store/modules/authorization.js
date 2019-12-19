import store from "@store";

import { AUTH_REQUIRED, CLOSE_AUTH_DIALOG } from "@store/actions/navigation";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from "@store/actions/security";

import { Api } from "@plugins/axios.config";


const state = {
    isAuthDialog: false,
    isUserAutorized: false,
    accessToken: localStorage.getItem('accessToken') || '',
    status: ''
};

const getters = {
    isAuthDialog: state => state.isAuthDialog,
    isUserAutorized: state => state.isUserAutorized
};

const actions = {
    [AUTH_REQUEST]: ({ commit, dispatch }, userprofile) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            Api.post('/auth/signin', userprofile)
                .then(response => {
                    commit(AUTH_SUCCESS, response.data);
                    resolve(response);
                })
        });
    }
}

const mutations = {
    [AUTH_REQUIRED](state) {
        state.isAuthDialog = true;
    },
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading';
    },
    [AUTH_SUCCESS]: (state, resp) => {
        state.status = 'success';
        state.accessToken = resp.accessToken;
        localStorage.setItem('accessToken', resp.accessToken)
        state.hasLoadedOnce = true
        state.isAuthDialog = false;
        state.isUserAutorized = true;
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error';
        state.hasLoadedOnce = true;
        localStorage.removeItem('accessToken');
    },
    [AUTH_LOGOUT]: (state) => {
        state.accessToken = '';
        state.isUserAutorized = false;
    },
    [CLOSE_AUTH_DIALOG]() {
        state.isAuthDialog = false;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};

