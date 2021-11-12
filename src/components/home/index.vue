<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header/></el-header>
      <el-main><router-view/></el-main>
      <Footer/>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "index",
  components: {
    Header,Footer,
  },
}
</script>

<style lang="less" scoped>
.el-header{
  width: 100%;
  height: 100px;
  padding: 0;
  position: fixed;
  z-index: 10;
}
.el-main{
  --el-main-padding: 0px;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}
.el-footer{
  position: relative;
}
.headerMain-bg {
  background: #192439;
  -webkit-transition:500ms;
}
</style>
