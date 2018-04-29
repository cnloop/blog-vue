<template>
  <div class="container-fluid main">
    <div class="wrap center-block clearfix">
      <topic-left></topic-left>
      <topic-info></topic-info>
    </div>

  </div>
</template>
<script>
import TopicLeft from "./topic-left.vue";
import TopicInfo from "../common/topic-info.vue";
export default {
  components: {
    TopicLeft,
    TopicInfo
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

