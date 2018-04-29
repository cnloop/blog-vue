<template>
    <div class="newfile pull-left">
        <div>
            <h1>修改话题</h1>
        </div>
        <form @submit.prevent="updateTopic">
            <div class="form-group">
                <label for="eamil-form">标题</label>
                <input v-model="formData.title" type="text" class="form-control form-control-1" placeholder="标题" autofocus>
            </div>
            <div class="form-group">
                <label for="eamil-form">内容</label>
                <textarea v-model="formData.content" class="form-control form-control-1" rows=10 placeholder="请输入..."></textarea>
            </div>
            <button class="btn btn-success" type="submit">提交修改</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        title: "",
        content: ""
      }
    };
  },
  created() {
    this.loadTopic();
  },
  methods: {
    async loadTopic() {
      try {
        const id = this.$route.params.id;
        const { data } = await axios.get(`/api/topics/listOne/${id}`);
        this.formData = data;
        console.log(this.formData);
      } catch (err) {
        const { request } = err.response;
        switch (request.status) {
          case 401:
            window.alert("没有登陆");
            break;
        }
      }
    },
    async updateTopic() {
      try {
        const { id, title, content } = this.formData;
        if (!title) return;
        if (!content) return;
        const ret = await axios.patch(`/api/topics/${id}`, { title, content });
        this.$router.back();
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
<style lang="less">
.newfile {
  width: 982px;
  h1 {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  .form-control-1:focus {
    border-color: #ccc !important;
    box-shadow: 0 0 0px #333;
  }

  textarea {
    resize: none;
    height: 500px;
  }
}
</style>
