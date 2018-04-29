<template>
    <div class="container-fluid main">
        <div class="wrap center-block clearfix">
            <newleft></newleft>
            <topic-info></topic-info>
        </div>
    </div>
</template>
<script>
import TopicInfo from "../common/topic-info.vue";

import newleft from "./newleft.vue";
export default {
  components: {
    TopicInfo,
    newleft
  }
};
</script>
<style lang="less">
.main {
  margin-top: 60px;
  background-color: #e1e1e1;
}
.wrap {
  width: 1300px;
  //   background-color: red;
}
</style>
