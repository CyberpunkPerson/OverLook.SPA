<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(userDetails, i) in this.userDetailsList.models" :key="i" cols="3">
        <v-card align-center justify-center raised max-width="600px">
          <v-img :src="require('@img/undefined-avatar.jpg')" height="200px"></v-img>
          <v-card-text>
            <div>User Details</div>
            <p class="display-1 text--primary">{{userDetails.name}}</p>
            <v-col v-for="(phoneNumber, y) in userDetails.contactInfo.phoneNumbers" :key="y">
              <p>Phone number: {{phoneNumber.number}}</p>
              <p>Provider: {{phoneNumber.provider}}</p>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Api } from "@plugins/axios.config";
import UserDetails from "@model/userdetails";
import UserDetailsList from "@model/userdetailsList";

export default {
  name: "userdetails-list",
  data() {
    let userDetailsList = new UserDetailsList();

    return {
      userDetailsList,
      phoneNumbers: []
    };
  },
  mounted() {
    Api.get("/user/findAll").then(response => {
      this.userDetailsList = new UserDetailsList(response.data);
    });
  }
};
</script>

<style scoped></style>
