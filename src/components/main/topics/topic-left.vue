<template>
  <ul class="list-group list-topic pull-left">
    <li class="list-group-item" v-for="item in topics">
      <img src="../../../assets/images/2018.jpg" alt="" class="avatar">
      <span class="span-count">
        <span>200</span>
        <span>/</span>
        <span>200</span>
      </span>
      <span class="label label-primary">问答</span>
      <router-link :to="{name:'detail',params:{id:item.id}}">{{item.title}}</router-link>
      <span class="last-reply pull-right">
        <img src="../../../assets/images/2019.png" alt="">
        <span>9分钟前</span>
      </span>
    </li>

    <div class="pagination center-block">
      <pagination @loadList='getList' :page-count="pageCount"></pagination>
    </div>
  </ul>
</template>
<script>
import pagination from "./pagination.vue";
import axios from "../../../../node_modules/axios/dist/axios.js";
export default {
  data() {
    return {
      page: 1,
      limit: 10,
      topics: [],
      pageCount: ""
    };
  },
  created() {
    this.getList();
  },
  computed: {
    time() {}
  },
  methods: {
    async getList(pageIndex) {
      try {
        if (!pageIndex) pageIndex = 1;
        const { data } = await axios.get(
          `/api/topics?_page=${pageIndex}&_limit=${this.limit}`
        );
        this.topics = data.topics;
        this.pageCount = data.pageCount;
      } catch (err) {
        console.log(err);
      }
    },
    loadList(pageIndex) {}
  },
  components: {
    pagination
  }
};
</script>
<style lang='less'>
.list-topic {
  width: 982px;
  font-size: 16px;
  li {
    height: 50px;
    line-height: 20px;
    position: relative;
  }
  li:hover {
    background-color: #f6f6f6;
  }
  a {
    position: absolute;
    top: 15px;
    padding-left: 10px;
    font-size: 16px;
    color: #333;
  }
  .span-count {
    display: inline-block;
    font-size: 12px;
    margin-right: 10px;
  }
  .avatar {
    width: 30px;
    margin-right: 10px;
  }
  .last-reply {
    color: #778087;
    font-size: 12px;
    padding-top: 5px;
    img {
      vertical-align: top;
      width: 15px;
      margin-right: 10px;
    }
  }
}

.pagination {
  margin-top: 5px;
}
</style>
