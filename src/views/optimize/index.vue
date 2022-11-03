<template>
  <div>
    <el-container style="z-index: 10" class="container">
      <el-aside>
        <el-menu
          :default-active="this.$route.path" 
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home/optimize/settings1"><i class="el-icon-menu"></i>时延优化配置</el-menu-item>
          <el-menu-item index="/home/optimize/showpage1"><i class="el-icon-menu"></i>时延优化性能展示</el-menu-item>
          <el-menu-item index="/home/optimize/settings2"><i class="el-icon-menu"></i>可靠性优化配置</el-menu-item>
          <el-menu-item index="/home/optimize/showpage2"><i class="el-icon-menu"></i>可靠性优化性能展示</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="background-color: #fff;">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default ({
  name: 'vueLC',
  data() {
    return {

    };
  },
});
</script>
<style scoped>
  .el-menu {
    height: calc(100vh - 60px);
  }
</style>