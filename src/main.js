import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./assets/css/main.css";
import ElementUI from "element-ui";
import router from "./router.js";
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  el: "#app",
  // template: "<App/>",
  // components: {
  // App
  render: c => c(App),
  router
  // }
});
