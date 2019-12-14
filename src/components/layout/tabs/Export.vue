<template>
  <v-card align-center justify-center>
    <v-btn @click.prevent="exportUsers()">
      <v-icon>mdi-file-export</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "export",
  data: () => ({}),
  methods: {
    exportUsers() {
      window.open("/overlook/directory/export/users/pdf");
    }
  }
};
</script>

<style scoped></style>
