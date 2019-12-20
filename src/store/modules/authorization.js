import { AUTH_REQUIRED, CLOSE_AUTH_DIALOG } from "@store/actions/navigation";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT, AUTH_CHECK } from "@store/actions/security";

import { Api } from "@plugins/axios.config";

import UserProfile from "@model/userprofile";


const state = {
    isAuthDialog: false,
    isUserAutorized: false,
    accessToken: localStorage.getItem('accessToken') || '',
    userprofile: new UserProfile(),
    authorities: [],
    status: ''
};

const getters = {
    isAuthDialog: state => state.isAuthDialog,
    isUserAutorized: state => state.isUserAutorized,
};

const actions = {
    [AUTH_REQUEST]: ({ commit }, userprofile) => {
        return new Promise((resolve) => {
            commit(AUTH_REQUEST);
            Api.post('/auth/signin', userprofile)
                .then(response => {
                    commit(AUTH_SUCCESS, response.data);
                    resolve(response);
                })
        });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
        return new Promise((resolve) => {
            Api.post('/auth/logout')
                .then(response => {
                    commit(AUTH_LOGOUT);
                    resolve(response);
                })
        });
    },
    [AUTH_CHECK]: ({ commit }) => {
        return new Promise((resolve) => {
            Api.post('/auth/check')
                .then(response => {
                    commit(AUTH_CHECK, response.data);
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
        state.userprofile = new UserProfile({
            profileId: resp.userProfile.profileId,
            username: resp.userProfile.username,
            authorities: resp.userProfile.authorities,
            accountNonExpired: resp.userProfile.accountNonExpired,
            accountNonLocked: resp.userProfile.accountNonLocked,
            credentialsNonExpired: resp.userProfile.credentialsNonExpired,
            enabled: resp.userProfile.enabled
        })
        state.authorities = state.userprofile.authorities;
        state.isAuthDialog = false;
        state.isUserAutorized = true;
    },
    [AUTH_CHECK]: (state, resp) => {
        state.userprofile = new UserProfile({
            profileId: resp.userProfile.profileId,
            username: resp.userProfile.username,
            authorities: resp.userProfile.authorities,
            accountNonExpired: resp.userProfile.accountNonExpired,
            accountNonLocked: resp.userProfile.accountNonLocked,
            credentialsNonExpired: resp.userProfile.credentialsNonExpired,
            enabled: resp.userProfile.enabled
        });

        state.authorities = state.userprofile.authorities;
        state.isUserAutorized = true;
        state.isAuthDialog = false;
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error';
        localStorage.removeItem('accessToken');
    },
    [AUTH_LOGOUT]: (state) => {
        state.accessToken = '';
        state.isUserAutorized = false;
        state.userProfile = null;
        state.authorities = [];
        localStorage.removeItem("accessToken")
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

