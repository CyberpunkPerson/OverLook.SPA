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
//@click.prevent="exportUsers()"
//href="/api/overlook/directory/export/users/pdf"
  methods: {
    exportUsers() {
      window.open("/api/overlook/directory/export/users/pdf");
      //this.$api.get("/directory/export/users/pdf").then(responce => {
      //  console.log("SUCCESS!!");
     // });
    }
  }
};
</script>

<style scoped></style>
