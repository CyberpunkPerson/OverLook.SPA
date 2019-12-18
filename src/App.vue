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
        </v-tabs>
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

export default {
  name: "App",
  components: { ErrorHandler, Authentication },
  data: () => ({}),
  errorCaptured(err, vm, info) {
    console.error(err);
  }
};
</script>

<style scoped></style>
