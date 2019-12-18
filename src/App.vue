<template>
  <v-app>
    <error-handler></error-handler>
    <authentication></authentication>

    <v-app-bar
      app
      absolute
      color="grey lighten-4"
      dark
      prominent
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
      :src="require('@img/toolbar-background.jpg')"
    >
      <v-toolbar-title>OverLook</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent">
          <v-tab to="/import">Import</v-tab>
          <v-tab to="/export">Export</v-tab>
          <v-tab to="/profile">Profile</v-tab>
          <v-tab to="/user-list">User List</v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <template v-if="!isUserAuthorized">
        <v-btn color="black" text @click.prevent="signIn">
          <v-icon>mdi-exit-to-app</v-icon>Sign In
        </v-btn>
      </template>

      <template v-else>
        <v-btn color="black" text @click.prevent="signIn">
          <v-icon>mdi-exit-to-app</v-icon>Log Out
        </v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
import ErrorHandler from "@components/ErrorHandler";
import Authentication from "@layout/authentication/Authentication";
import { THROW_ERROR } from "@store/actions/errors";
import { AUTHORIZATION_REQUIRED } from "@store/actions/navigation";

export default {
  name: "App",
  components: { ErrorHandler, Authentication },
  data: () => ({}),
  computed: {
    isUserAuthorized: {
      get() {
        this.$store.isUserAuthorized;
      }
    }
  },
  methods: {
    signIn() {
      this.$store.commit(AUTHORIZATION_REQUIRED);
    },
    logout() {
      
    }
  },
  errorCaptured(err, vm, info) {
    this.$store.commit(THROW_ERROR, err);
  }
};
</script>

<style scoped></style>
