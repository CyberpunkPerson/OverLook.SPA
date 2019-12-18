<template>
  <v-text-field
    outline
    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    :rules="[rules.required, rules.min]"
    :type="showPassword ? 'text' : 'password'"
    v-model="password"
    hint="At least 8 characters"
    @click:append="showPassword = !showPassword"
    counter
  ></v-text-field>
</template>

<script>
export default {
  name: "password-input",
  props: {
    value: String
  },
  data: () => ({
    showPassword: false,
    internalPassword: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    }
  }),
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("onPasswordChange", value);
      }
    }
  }
};
</script>

<style scoped>
</style>