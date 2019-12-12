<template>
<v-app-bar
      absolute
      color="light-blue lighten-1"
      dark
      prominent
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
      :src="require('@img/toolbar-background.jpg')"
    >

      <v-toolbar-title>OverLook</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs
          align-with-title
          background-color="transparent"
        >
          <v-tab to="/import">Import</v-tab>
          <v-tab to="/export">Export</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
</template>

<script>
export default {
  name: "toolbar",

};
</script>

<style scoped></style>
