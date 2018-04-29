<template>
  <div>
    <navbar :user-info="userInfo"></navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>

</template>
<script>
import navbar from "./navbar/navbar.vue";
import main from "../main/main.vue";
import AppFooter from "./footer/footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      userInfo: ""
    };
  },
  async created() {
    try {
      const { data } = await axios.get("/api/session");
      this.userInfo = data;
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    navbar,
    AppFooter
  },
  methods: {}
};
</script>
<style>

</style>
