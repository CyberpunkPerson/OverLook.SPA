<template>
  <v-card align-center justify-center>
    <v-btn @click.prevent="exportUsers()">
      <v-icon>mdi-file-export</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import { Api } from "@plugins/axios.config";

export default {
  name: "export",
  data: () => ({}),
  methods: {
    exportUsers() {
      Api.get("/directory/export/users/pdf").then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        
        link.click();
      });
    }
  }
};
</script>

<style scoped></style>
