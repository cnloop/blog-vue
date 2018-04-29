<template>
  <div class="container-fluid main">
    <div class="wrap center-block clearfix">
      <div class="list-detail pull-left">
        <!-- 主题内容 -->
        <div class="list-main">
          <div class="list-title">
            <h1>{{topic.title}}</h1>
          </div>
          <div class="del-update" v-if="isUser">
            <router-link :to="{name:'update',params:{id:topic.id}}">编辑</router-link>
            <a @click.prevent="deleteTopic(topic.id)" href="#">删除</a>
          </div>
          <div class="list-content">
            <p>{{topic.content}}</p>
          </div>
          <div class="list-date">
            <span>posted @ 2018-04-24 20:27 氢氦 阅读(47) 评论(0) 编辑 收藏</span>
          </div>
        </div>
        <!-- 评论内容 -->
        <div v-if="isComment" class="comment">
          <div class="header">
            <span>评论列表</span>
          </div>
          <div class="main">
            <ul>
              <li v-for="item in comments">
                <div class="top">
                  <img src="../../../assets/images/2019.png" alt="">
                  <span>今天你吃了吗</span>
                </div>
                <div class="center">
                  <p>{{item.content}}</p>
                  <div class="time">
                    <span>发表于10分钟前</span>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
        <!-- 发表评论 -->
        <div class="create-comment">
          <div class="header">发表评论</div>
          <div class="main">
            <div class="main-text">
              <textarea v-model="newComment" style="padding:10px;width:100%;height:100px;resize:none;outline:none;"></textarea>
            </div>
          </div>
          <div class="commit-comment">
            <a @click.prevent="commitTopic" class="btn btn-info btn-sm">提交评论</a>
          </div>
        </div>
      </div>
      <topic-info></topic-info>
    </div>
  </div>
</template>
<script>
import TopicInfo from "../common/topic-info.vue";
import axios from "axios";
export default {
  components: {
    TopicInfo
  },
  data() {
    return {
      topic: {
        title: "",
        content: ""
      },
      isUser: false,
      comments: [],
      newComment: "",
      isComment: false
    };
  },
  async beforeRouteEnter(to, from, next) {
    let topic = "";
    let user = "";
    try {
      const id = to.params.id;
      topic = await axios.get(`/api/topics/listOne/${id}`);
      user = await axios.get("/api/session");
      next(vm => {
        if (user.id === topic.user_id) vm.$data.isUser = true;
        vm.$data.topic = topic.data;
      });
    } catch (err) {
      next(vm => {
        vm.$data.topic = topic.data;
      });
      console.error(err);
    }
  },
  created() {
    this.getComments();
  },
  methods: {
    async deleteTopic(id) {
      try {
        if (!window.confirm("确认删除吗？")) return;
        const ret = await axios.delete(`/api/topics/${id}`);
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
    async getComments() {
      try {
        const { data } = await axios.get(
          `/api/comments?article_id=${this.$route.params.id}`
        );
        this.comments = data;
        if (data) this.isComment = true;
        console.log(this.comments);
      } catch (err) {
        console.log(err);
      }
    },
    async commitTopic() {
      try {
        const { id } = this.topic;
        console.log(this.newComment);
        const { data } = await axios.post("/api/comments", {
          content: this.newComment,
          article_id: id
        });
        this.comments.push(data);
        this.newComment = "";
      } catch (err) {
        console.log(err);
      }
    }
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

.list-detail {
  width: 982px;
  min-height: 600px;

  .list-main {
    border-radius: 6px;
    background-color: #fff;
    min-height: 500px;
    overflow: hidden;
    position: relative;
    h1 {
      vertical-align: bottom;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 20px;
    }
    .del-update {
      text-align: right;
      a {
        margin-right: 8px;
      }
    }
    .list-content {
      margin-top: 10px;
      padding: 20px;
      border-top: 1px solid #e5e5e5;
      margin-bottom: 20px;
    }
    .list-date {
      position: absolute;
      right: 14px;
      bottom: 11px;
    }
  }

  .comment {
    margin-top: 23px;
    border-radius: 10px;
    background-color: #fff;
    .header {
      background-color: #f6f6f6;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      padding-left: 5px;
      border-radius: 4px;
      text-indent: 5px;
    }
    .main {
      margin-top: 0px;
      padding: 0px;
      background-color: #fff;
      border-radius: 5px;
      ul {
        margin-left: 0px;
        padding: 0px;
        list-style: none;
        li {
          border-bottom: 1px solid #eee;
        }
        li:last-child {
          border-bottom: none;
        }
        .top {
          height: 50px;
          line-height: 50px;
          position: relative;
          img {
            position: absolute;
            top: 6px;
            left: 5px;
            width: 35px;
            border: 1px solid #d3d1d1;
          }
          span {
            margin-left: 53px;
            font-weight: 700;
          }
        }
        .center {
          min-height: 60px;
          padding: 20px 10px 35px 10px;
          position: relative;
          .time {
            position: absolute;
            bottom: 8px;
            right: 12px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .create-comment {
    margin-top: 23px;
    min-height: 200px;
    border-radius: 10px;
    background-color: #fff;
    .header {
      background-color: #f6f6f6;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      padding-left: 5px;
      border-radius: 4px;
      text-indent: 5px;
    }
    .main {
      background-color: #fff;
      margin-top: 0px;
      padding-top: 18px;
      padding: 20px 20px 5px 20px;
    }
    .commit-comment {
      text-align: right;
      a {
        margin-right: 20px;
      }
    }
  }
}
</style>
