import VueRouter from "vue-router";
import Vue from "vue";

import Home from "@layout/Home"
import Import from "@layout/tabs/Import";
import Export from "@layout/tabs/Export";
import UserDetails from "@layout/userdetails/UserDetails";
import UserDetailsList from "@layout/userdetails/UserDetailsList";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/import", component: Import },
    { path: "/export", component: Export },
    { path: "/userdetails", component: UserDetails },
    { path: "/userdetails-list", component: UserDetailsList },

  ]
  // mode:'history'
});
