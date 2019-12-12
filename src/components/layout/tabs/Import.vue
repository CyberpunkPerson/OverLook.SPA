<template>
  <v-card align-center justify-center>
    <v-layout>
      <v-file-input
        accept="application/json"
        v-model="file"
        prepend-icon="mdi-paperclip"
        placeholder="Select your JSON file"
        outlined
        dense
      >
      </v-file-input>

      <v-btn @click.prevent="submit()">
        <v-icon>mdi-cloud-upload-outline</v-icon>
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "user-import",
  data: () => ({
    file: []
  }),

  methods: {
    submit() {
      let data = new FormData();
      data.append("directory", this.file);

      this.$api
        .post("/directory/save", data, {
          headers: {
            ContentType: "application/json"
          }
        })
        .then(responce => {
          console.log("SUCCESS!!");
        });
    }
  }
};
</script>

<style scoped></style>
