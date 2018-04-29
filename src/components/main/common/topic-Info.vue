<template>
    <div class="right-info clearfix pull-right">
        <div class="introduce">
            <h4>Super professional team</h4>
            <span class="btn btn-primary">Login through github</span>
        </div>
        <div class="ad">
            <img src="../../../assets/images/ad-01.jpg" alt="" width="270">
            <img src="../../../assets/images/ad-02.jpg" alt="" width="270">
            <img src="../../../assets/images/ad-03.jpg" alt="" width="270">
            <img src="../../../assets/images/ad-05.jpg" alt="" width="270">
            <img src="../../../assets/images/ad-04.jpg" alt="" width="270">
        </div>
        <div class="interesting-topics">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio >></li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        <div class="links">
            <h3>Friendly Links</h3>
            <img src="../../../assets/images/yq-01.png" alt="" width="150">
            <img src="../../../assets/images/yq-02.png" alt="" width="150">
            <img src="../../../assets/images/yq-04.png" alt="" width="150">
            <img src="../../../assets/images/yq-03.png" alt="" width="150">
        </div>
        <div class="QR">
            <h3>Client QR code</h3>
            <img src="../../../assets/images/ma.png" alt="" width="200">
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.right-info {
  width: 290px;
  //   background-color: pink;
  .introduce {
    height: 100px;
    padding: 10px;
    background-color: #fff;
  }
  .ad {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
  }
  .interesting-topics {
    margin-top: 15px;
    li {
      border: none;
    }
    li:first-child {
      background-color: #f6f6f6;
    }
  }
  .links {
    background-color: #fff;
    margin-top: 10px;
    h3 {
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      font-size: 15px;
      background-color: #f6f6f6;
    }
    img {
      margin-bottom: 5px;
      padding: 0 10px 10px 10px;
    }
  }
  .QR {
    background-color: #fff;
    margin-top: 10px;
    h3 {
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      font-size: 15px;
      background-color: #f6f6f6;
    }
    img {
      display: block;
      margin: 0 auto;
      padding-bottom: 10px;
    }
  }
}
</style>
