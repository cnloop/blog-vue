<template>
  <div class="register-bgc">
    <div class="register">
      <div class="header">
        <h1>用户登录</h1>
      </div>
      <form @submit.prevent="register" id="register_form">
        <div class="form-group form-group-1">
          <label for="eamil-form">邮箱</label>
          <input @blur="checkEmail" :class="{emailOutline:isShow.email}" v-model="formData.email" type="text" class="form-control form-control-1" placeholder="Email" autofocus>
          <span v-show="isCorrect.email" class="glyphicon glyphicon-ok checkOk"></span>
        </div>
        <div class="tips">
          <span class="pull-right" v-show="isShow.email">{{errMsg.email}}</span>
        </div>
        <div class="form-group form-group-1">
          <label for="pwd">昵称</label>
          <input @blur="checkNickname" :class="{emailOutline:isShow.nickname}" v-model="formData.nickname" type="text" class="form-control form-control-1" placeholder="Nickname">
          <span v-show="isCorrect.nickname" class="glyphicon glyphicon-ok checkOk"></span>
        </div>
        <div class="tips">
          <span class="pull-right" v-show="isShow.nickname">{{errMsg.nickname}}</span>
        </div>
        <div class="form-group form-group-1">
          <label for="pwd">密码</label>
          <input @blur="checkPwd1" v-model="formData.pwd1" :class="{emailOutline:isShow.pwd1}" type="password" class="form-control form-control-1" placeholder="Password">
          <span v-show="isCorrect.pwd1" class="glyphicon glyphicon-ok checkOk"></span>
        </div>
        <div class="tips">
          <span class="pull-right" v-show="isShow.pwd1">{{errMsg.pwd1}}</span>
        </div>
        <div class="form-group pwd form-group-1">
          <label for="pwd">确认密码</label>
          <input @blur="checkPwd2" v-model="formData.pwd2" :class="{emailOutline:isShow.pwd2}" type="password" class="form-control form-control-1" placeholder="Confirm Password">
          <span v-show="isCorrect.pwd2" class="glyphicon glyphicon-ok checkOk"></span>
        </div>

        <div class="tips">
          <span class="pull-right" v-show="isShow.pwd2">{{errMsg.pwd2}}</span>
        </div>
        <div class="checkbox checkbox-1">
          <label>
            <input type="checkbox checkbox-1">记住我
          </label>
        </div>
        <button type="submit" class="btn btn-success btn-block">登录</button>
      </form>
      <div class="message">
        <p>完成登陆?
          <a href="#/">回到首页</a>
        </p>
      </div>
    </div>
  </div>

</template>
<script>
import _ from "lodash";
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        nickname: "",
        pwd1: "",
        pwd2: ""
      },
      errMsg: {
        email: "",
        nickname: "",
        pwd1: "",
        pwd2: ""
      },
      isShow: {
        email: false,
        nickname: false,
        pwd1: false,
        pwd2: false
      },
      isCorrect: {
        email: false,
        nickname: false,
        pwd1: false,
        pwd2: false
      }
    };
  },
  methods: {
    async checkEmail() {
      let email = _.trim(this.formData.email);
      if (!email) {
        if (!email) {
          this.isShow.email = !email ? true : false;
          this.errMsg.email = this.isShow.email ? "邮箱不能为空" : "";
          this.isCorrect.email = false;
          return false;
        }
      }
      const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
      this.isShow.email = !reg.test(email) ? true : false;
      this.errMsg.email = this.isShow.email ? "邮箱格式错误" : "";
      this.isCorrect.email = false;
      if (!reg.test(email)) return false;
      const { data } = await axios.get(`/api/users?email=${email}`);
      this.isShow.email = data.length ? true : false;
      this.errMsg.email = this.isShow.email ? "邮箱已存在" : "";
      this.isCorrect.email = !data.length;
      return data.length;
    },
    async checkNickname() {
      let nickname = _.trim(this.formData.nickname);
      if (!nickname) {
        this.isShow.nickname = !nickname ? true : false;
        this.errMsg.nickname = this.isShow.nickname ? "昵称不能为空" : "";
        this.isCorrect.nickname = false;
        return false;
      }
      const reg = /^[0-9a-zA-Z\u4e00-\u9fa5_]{5,16}$/;
      this.isShow.nickname = !reg.test(nickname) ? true : false;
      this.errMsg.nickname = this.isShow.nickname ? "昵称格式错误" : "";
      this.isCorrect.nickname = false;
      if (!reg.test(nickname)) return false;
      const { data } = await axios.get(`/api/users?nickname=${nickname}`);
      this.isShow.nickname = data.length ? true : false;
      this.errMsg.nickname = data.length ? "昵称已存在" : "";
      this.isCorrect.nickname = !data.length;
      return data.length;
    },
    checkPwd1() {
      let pwd1 = _.trim(this.formData.pwd1);
      const reg = /^(\w){6,20}$/;
      if (!pwd1) {
        this.isShow.pwd1 = true;
        this.errMsg.pwd1 = "密码不能为空";
        this.isCorrect.pwd1 = false;
        return false;
      }
      if (!reg.test(pwd1)) {
        this.isShow.pwd1 = true;
        this.errMsg.pwd1 = "密码格式不对";
        this.isCorrect.pwd1 = false;
        return false;
      }
      this.isShow.pwd1 = false;
      this.errMsg.pwd1 = "";
      this.isCorrect.pwd1 = true;
      return true;
    },
    checkPwd2() {
      let pwd2 = _.trim(this.formData.pwd2);
      const reg = /^(\w){6,20}$/;
      if (!pwd2) {
        this.isShow.pwd2 = true;
        this.errMsg.pwd2 = "密码不能为空";
        this.isCorrect.pwd2 = false;
        return false;
      }
      if (!reg.test(pwd2)) {
        this.isShow.pwd2 = true;
        this.errMsg.pwd2 = "密码格式不对";
        this.isCorrect.pwd2 = false;
        return false;
      }
      if (pwd2 !== this.formData.pwd1) {
        this.isShow.pwd2 = true;
        this.errMsg.pwd2 = "确认密码是否一致";
        this.isCorrect.pwd2 = false;
        return false;
      }
      this.isShow.pwd2 = false;
      this.errMsg.pwd2 = "";
      this.isCorrect.pwd2 = true;
      return true;
    },
    async register() {
      if (!this.checkEmail()) {
        return;
      }
      if (!this.checkNickname()) {
        return;
      }
      if (!this.checkPwd2()) {
        return;
      }
      this.formData.password = this.formData.pwd1;
      delete this.formData.pwd1;
      delete this.formData.pwd2;
      const { data } = await axios.post("/api/users", this.formData);
      console.log(data);
      this.$router.push("/");
    }
  }
};
</script>
<style lang='less'>
.register-bgc {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  z-index: 99;
  top: 0px;

  .register {
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    color: #333;

    form {
      padding: 20px;
      margin-bottom: 15px;
      border: 1px solid #d8dee2;
      border-radius: 5px;
      background-color: #fff;
    }

    .form-group-1 {
      margin-bottom: 5px;
      position: relative;
      .checkOk {
        position: absolute;
        top: 32px;
        right: 12px;
        font-size: 18px;
        color: #34dd34;
      }
    }

    .tips {
      height: 22px;
      line-height: 22px;
      font-size: 12px;
      color: #ea4c4c;
    }

    .form-control-1:focus {
      border-color: #ccc !important;
      box-shadow: 0 0 0px #333;
    }

    .emailOutline {
      border-color: red !important;
    }

    .checkbox-1 {
      margin-top: 0px;
    }

    .message {
      padding: 10px;
      padding-bottom: 0;
      border: 1px solid #a5acb1;
      border-radius: 5px;
    }

    .header {
      text-align: center;
      padding-bottom: 20px;

      h1 {
        font-size: 26px;
      }
    }
  }
}
</style>
