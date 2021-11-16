<template>
<el-container>
 <el-header>
     <header-top></header-top>
 </el-header>
  <el-main>
     <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import headerTop from './components/header-top'
export default {
  name: 'layout',
  components: {
    headerTop
  }
}
</script>

<style scoped lang="scss">

</style>
