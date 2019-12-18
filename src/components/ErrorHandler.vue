<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline">Error</v-card-title>
      <v-card-subtitle>{{ status }}</v-card-subtitle>

      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="black" text @click.prevent="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { THROW_ERROR } from "@store/actions/errors";

export default {
  name: "error-handler",
  data: () => ({
    error: null
  }),
  computed: {
    dialog: {
      get() {
        return this.$store.getters.isExceptionDialog;
      },
      set() {
        this.$store.commit(THROW_ERROR);
      }
    },
    status: {
      get() {
        return this.error ? this.error.message : "";
      }
    },
    message:{
      get(){
        return this.error ? this.error.response.data.exceptionMessage : "";
      }
    }
  },
  beforeUpdate() {
    this.error = this.$store.getters.getErrors;
  }
};
</script>

<style scoped></style>
