<template>
  <v-card align-center justify-center raised max-width="600px">
    <v-img :src="require('@img/undefined-avatar.jpg')" height="200px"></v-img>
    <v-card-text>
      <div>User Details</div>
      <p class="display-1 text--primary">{{this.userDetails.name}}</p>
      <v-col v-for="(phoneNumber, i) in phoneNumbers" :key="i">
        <p>Phone number: {{phoneNumber.number}}</p>
        <p>Provider: {{phoneNumber.provider}}</p>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import { Api } from "@plugins/axios.config";
import UserDetails from "@model/userdetails";

export default {
  name: "userdetails",
  data() {
    let userDetails = new UserDetails();

    return {
      userDetails,
      phoneNumbers: []
    };
  },
  mounted() {
    Api.get("/user/retrieve").then(response => {
      this.userDetails = new UserDetails({
        userId: response.data.userId,
        name: response.data.name,
        contactInfo: response.data.contactInfo
      });
      this.phoneNumbers = this.userDetails.contactInfo.phoneNumbers;
    });
  }
};
</script>

<style scoped></style>
