<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" id="nav">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Fun amusement park</a>
                <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" placeholder="Search...">
                </form>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right rigth-nav">
                    <router-link to="/" tag="li">
                        <a>首页</a>
                    </router-link>
                    <router-link to="/" tag="li">
                        <a>API</a>
                    </router-link>
                    <router-link to="/new" tag="li">
                        <a>发表</a>
                    </router-link>
                    <router-link to="/" tag="li">
                        <a>新手入门</a>
                    </router-link>
                    <template v-if="!(userInfo)">
                        <router-link to="/login" tag="li">
                            <a>登陆</a>
                        </router-link>
                        <router-link to="/register" tag="li">
                            <a>注册</a>
                        </router-link>
                    </template>
                    <template v-else>
                        <router-link to="" tag="li">
                            <a class="glyphicon glyphicon-user"></a>
                        </router-link>
                        <router-link to="/register" tag="li">
                            <a>退出</a>
                        </router-link>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  props: ["userInfo"],
  data() {
    return { isShow: true };
  }
};
</script>
<style scoped lang='less'>
#nav {
  padding: 0 50px 0 50px;
  background-color: #080808;
  a {
    color: #fff;
  }
  .glyphicon {
    top: -1px;
  }
  //   .rigth-nav {
  //     a {
  //       position: relative;
  //     }
  //   }
  //   .user {
  //     display: inline-block;
  //   }
}
</style>

