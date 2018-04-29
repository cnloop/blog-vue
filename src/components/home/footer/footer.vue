<template>
    <div class="contianer foot-wrap">
        <div id='footer'>
            <div class="left pull-left">
                <span>Hello from Seattle.</span>
                <span>Follow @code</span>
                <span>Funny Story</span>
            </div>

            <div class="right pull-right">
                <span>Support</span>
                <span>Privacy</span>
                <span>Privacy</span>
                <span>Terms of Use</span>
                <span>License</span>
                <span>Microsoft homepage</span>
                <span>© 2018 Microsoft</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang='less'>
.foot-wrap {
  background-color: #333;
  margin-top: 30px;
}
#footer {
  width: 1300px;
  height: 70px;
  margin: 0 auto;
  .left,
  .right {
    margin-top: 35px;
  }
  span {
    margin-right: 20px;
    color: aliceblue;
  }
}
</style>
