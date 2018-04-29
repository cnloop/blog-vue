<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <a href="#">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="(item,index) in pages">
        <a href="#" @click.prevent='changePage(item,index)'>{{item}}</a>
      </li>
      <li>
        <a href="#">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["pageCount"],
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
      isVisited: 1
    };
  },
  created() {
    // this.
  },
  methods: {
    changePage(item, index) {
      console.log("index==>" + index);
      console.log("总数==》" + this.pageCount);
      let firtItem = this.pages[0];
      let lastItem = this.pages[this.pages.length - 1];
      let leftRet = firtItem - 1;
      let rightRet = this.pageCount - lastItem;
      this.$emit("loadList", item);
      let indexDif = index - 2;
      let arr = [];

      // 移动的距离 大于 索引距离

      indexDif;
      if (indexDif > 0) {
        if (rightRet > 0) {
          if (lastItem == this.pageCount) return;
          if (lastItem + Math.abs(indexDif) > this.pageCount) {
            this.pages = [
              this.pageCount - 4,
              this.pageCount - 3,
              this.pageCount - 2,
              this.pageCount - 1,
              this.pageCount
            ];
            return;
          }
          for (let i = 0; i < this.pages.length; i++) {
            let ret = this.pages[i] + indexDif;
            arr.push(ret);
          }
          return (this.pages = arr);
        }
      }

      if (indexDif < 0) {
        if (leftRet > 0) {
          if (firtItem == 1) return;
          if (firtItem - Math.abs(indexDif) >= 0) {
            this.pages = [1, 2, 3, 4, 5];
            return;
          }
          // if (firtItem == 2) {
          //   this.pages = [1, 2, 3, 4, 5];
          //   return;
          // }
          for (let i = 0; i < this.pages.length; i++) {
            let ret = this.pages[i] + indexDif;
            arr.push(ret);
          }
          return (this.pages = arr);
        }
      }
      // console.log(item);
      // loadList(pageIndex)
    }
  }
};
</script>
<style lang='less'>
.isBlue {
  background-color: blue;
}
.pagination {
  a:visited {
    background-color: #fff !important;
    color: #337ab7;
  }
}
</style>

