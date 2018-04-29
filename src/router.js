import VueRouter from "vue-router";
import home from "./components/home/home.vue";

import main from "./components/main/main.vue";
import TopicList from "./components/main/topics/topic-list.vue";
import NewTopic from "./components/main/topic-new/topic-new.vue";
import TopicDetail from "./components/main/topic-detail/topic-detail.vue";
import TopicUpdate from './components/main/topic-update/topic-update.vue'

import login from "./components/member/login.vue";
import register from "./components/member/register.vue";

export default new VueRouter({
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: home,
      children: [
        {
          path: "",
          component: main,
          children: [
            {
              path: "",
              component: TopicList
            },
            {
              path: "/new",
              component: NewTopic
            },
            {
              name: "detail",
              path: "/detail/:id",
              component: TopicDetail
            },{
              name: "update",
              path: "/update/:id",
              component: TopicUpdate
            }
          ]
        }
      ]
    },
    { path: "/login", component: login },
    { path: "/register", component: register }
  ]
});
