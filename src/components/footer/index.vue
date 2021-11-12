<template>
  <div class="footer">
    <div class="footer-background">
      <img src="../../assets/logo.png"/>
      <ul class="footerNav">
        <li><a href="http://www.the.co.jp/" class="external" target="_blank">会社概要</a></li>
        <li><a href="/privacy/">プライバシーポリシー</a></li>
        <li><a href="/agreement/">宿泊約款</a></li>
        <li><a href="https://www.the.co.jp/recruit/" class="external" target="_blank">採用情報</a></li>
      </ul>
      <p class="footer_copyright" style="font-size: 12px">THE Global System Copyright © 2021 All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
.footer{
  height: 230px;
  width: 100%;
  background-color: rgba(25, 36, 57, 0.97);
  display: flex;
  justify-content: center;
  text-align: center;
  .footer-background{
    margin-top: 50px;
    .footerNav{
      display: flex;
      margin: 20px 0;
      li{
        margin: 0 20px;
        list-style:none;
      }
    }
  }
}
</style>
