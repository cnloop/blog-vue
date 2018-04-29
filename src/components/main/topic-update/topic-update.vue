<template>
    <div class="container-fluid main">
        <div class="wrap center-block clearfix">
            <update-main></update-main>
            <topic-info></topic-info>
        </div>
    </div>
</template>
<script>
import TopicInfo from "../common/topic-info.vue";

import UpdateMain from "./update-main.vue";
export default {
  components: {
    TopicInfo,
    UpdateMain
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
