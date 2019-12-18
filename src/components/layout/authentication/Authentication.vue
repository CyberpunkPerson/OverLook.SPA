<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline">Authorization Required</v-card-title>

      <v-card-text>
        <v-container grid-list-xs>
          <v-layout wrap justify-center>
            <v-flex xs8>
              <h3>Username:</h3>
              <v-text-field v-model="username" required outline></v-text-field>
            </v-flex>

            <v-flex xs8>
              <h3>Password:</h3>
              <password-input :value="password" @onPasswordChange="password = $event"></password-input>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" text @click.prevent="dialog = false">Close</v-btn>
        <v-btn color="black" text @click.prevent="login">Sign in</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { AUTHORIZATION_REQUIRED } from "@store/actions/navigation";
import PasswordInput from "@base/PasswordInput";

export default {
  name: "authentication",
  components: { PasswordInput },
  data: () => ({
    error: null,
    username: "",
    password: ""
  }),
  computed: {
    dialog: {
      get() {
        return this.$store.getters.isAuthDialog;
      },
      set() {
        this.$store.commit(AUTHORIZATION_REQUIRED);
      }
    },
    status: {
      get() {
        return this.error ? this.error.message : "";
      }
    },
    message: {
      get() {
        return this.error ? this.error.response.data.exceptionMessage : "";
      }
    }
  }
  // beforeUpdate() {
  //   this.error = this.$store.getters.getErrors;
  // }
};
</script>

<style scoped></style>
