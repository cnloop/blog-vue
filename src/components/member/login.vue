<template>
  <div class="login-bgc">
    <div class="login">
      <div class="header">
        <h1>用户登录</h1>
      </div>
      <form @submit.prevent="login" id="login_form">
        <div class="form-group">
          <label for="eamil-form">账号</label>
          <input v-model="formData.username" type="text" class="form-control" id="email-form" name="email" placeholder="Email" autofocus>
        </div>
        <div class="form-group">
          <label for="pwd">密码</label>
          <a class="pull-right" href="">忘记密码？</a>
          <input v-model="formData.password" type="text" class="form-control" id="pwd" name="password" placeholder="Password">
        </div>
        <div class="checkbox check-div">
          <label>
            <input type="checkbox">记住我
          </label>
          <p class="tips" v-show="msg">{{msg}}</p>
        </div>
        <button type="submit" class="btn btn-success btn-block">登录</button>
      </form>
      <div class="message">
        <p>没有账号?
          <a href="/register">点击创建</a>.</p>
      </div>
    </div>
  </div>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      msg: ""
    };
  },
  methods: {
    async login() {
      console.log(this.formData);
      if (!this.formData.username) {
        this.msg = "用户名不能为空";
        return;
      }
      if (!this.formData.password) {
        this.msg = "密码不能为空";
        return;
      }
      try {
        const ret = await axios.post("/api/session", this.formData);
        this.$router.push("/");
      } catch (err) {
        const { request } = err.response;
        switch (request.status) {
          case 404:
            this.msg = "账号密码错误";
            break;
        }
      }
    }
  }
};
</script>
<style lang='less'>
.login-bgc {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  z-index: 99;
  top: 0px;
  .login {
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    color: #333;
    .check-div {
      position: relative;
    }
    .tips {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 12px;
      color: #ea4c4c;
    }

    .header {
      text-align: center;
      padding-bottom: 20px;
      h1 {
        font-size: 26px;
      }
    }

    form {
      padding: 20px;
      margin-bottom: 15px;
      border: 1px solid #d8dee2;
      border-radius: 5px;
      background-color: #fff;
    }

    .message {
      padding: 10px;
      padding-bottom: 0;
      border: 1px solid #a5acb1;
      border-radius: 5px;
    }
  }
}
</style>
