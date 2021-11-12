<template>
  <div id="nav" class="navBody">
    <div class="left" @click="this.$router.push({path:'/'})">
      <img src="../../assets/logo.png"/>
    </div>
    <div class="right">
      <h2 @click="this.$router.push({path:'/'})"><a>トップページ</a></h2>
      <h2><a>コンセプト</a></h2>
      <h2><a>ホテル一覧</a></h2>
      <h2><a>ギャラリー</a></h2>
      <h2 @click="this.$router.push({path:'/contact'})"><a>コンタクト</a></h2>
    </div>
  </div>
</template>

<script>

import { onMounted } from "vue";

export default {
  name: "Header",
  setup(){
    function handleScroll() {
      let headerMain = document.getElementById('nav');
      if (window.pageYOffset > 110) {
        headerMain.classList.add('headerMain-bg');
      } else {
        headerMain.classList.remove('headerMain-bg')
      }
    }
    onMounted(()=>{
      window.addEventListener('scroll', handleScroll, true)
    })
  }

}
</script>

<style lang="less" scoped>
.navBody{
  -webkit-transition:1000ms;
  height: 100px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  .left{
    margin-left: 4%;
  }
  .right{
    margin-right: 3%;
    display: flex;
    h2{
      margin-right: 50px;
      color: white;
      font-size: 18px;
      a{
        cursor:pointer;
      }
    }
  }
}

</style>
