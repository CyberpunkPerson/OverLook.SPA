import VueRouter from "vue-router";
import Vue from "vue";

import Import from "@layout/tabs/Import";
import Export from "@layout/tabs/Export";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/import", component: Import },
    { path: "/export", component: Export }
  ]
  // mode:'history'
});
