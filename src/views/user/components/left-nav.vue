<template>
    <!-- <div style="position:relative;">
     <el-tabs :tab-position="tabPosition" style="height: 200px;width:500px">
        <el-tab-pane label="用户管理">789</el-tab-pane>
        <el-tab-pane label="配置管理">345</el-tab-pane>
        <el-tab-pane label="角色管理">123</el-tab-pane>
        <el-tab-pane :label="zhiku">qqweqew</el-tab-pane>
      </el-tabs>
      <el-dropdown class="down" @command="handleCommand">
        <div class="el-icon-arrow-down"></div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="全部">全部</el-dropdown-item>
          <el-dropdown-item command="活动信息">活动信息</el-dropdown-item>
          <el-dropdown-item command="智库要闻">智库要闻</el-dropdown-item>
          <el-dropdown-item command="研究成果">研究成果</el-dropdown-item>
          <el-dropdown-item command="研究成果">研究成果</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
      <!-- <ul>
        <div class="line" ref="line"></div>
        <li v-for="(item,idx) in tabsList" :class="idx==index?'active':''" @click="son(item,idx)" :key="item.key">{{item.name}}</li>
      </ul> -->
      <!-- <div class="page-box">
      <span class="demonstration" @click="goBack()" v-show="currentPage!=1">首页</span>
      <el-pagination
        prev-text="上一页"
        next-text="下一页"
        @current-change="handleChangeSize"
        :current-page="currentPage"
        layout="prev, pager, next,slot"
        :total="1000">
      </el-pagination>
    </div> -->
<div>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      @focus="handleFocus"
    >
    </el-date-picker>
  </div>
</div>
</template>

<script setup>
export default {
  name: 'leftNav',
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: '',
      currentPage: 1,
      // list: [
      //   { name: 'news', url: '/user/news' },
      //   { name: 'facebook', url: '/user/facebook' },
      //   { name: 'youtub', url: '/user/youtub' }
      // ],
      tabPosition: 'top',
      zhiku: '智库'
      // tabsList: [
      //   { name: '新闻', key: 'news' },
      //   { name: '智库', key: 'zhiku' },
      //   { name: 'Twitter', key: 'twitter' },
      //   { name: 'Facebook', key: 'facebook' },
      //   { name: 'YouTube', key: 'youtube' },
      //   { name: 'Instagram', key: 'instagram' }
      // ],
      // index: 0
    }
  },
  watch: {
    // currentPage: {
    //   immediate: true,
    //   deep: true,
    //   handler (val, oldVal) {
    //     // console.log(oldVal, val)
    //     if (val === 1) {
    //       setTimeout(() => {
    //         document.querySelector('.btn-prev').style.display = 'none'
    //       }, 10)
    //     } else {
    //       setTimeout(() => {
    //         document.querySelector('.btn-prev').style.display = 'inline-block'
    //       }, 10)
    //     }
    //   }
    // }
  },
  methods: {
    // handleChangeSize (page) {
    //   this.currentPage = page
    // },
    // goBack () {
    //   this.currentPage = 1
    // }

    // 下拉点击事件
    handleCommand (command) {
      // console.log(this.zhiku)
      // console.log(command)
      if (command === '全部') {
        this.zhiku = '智库'
      } else {
        this.zhiku = command
      }
    },
    handleFocus () {
      console.log(123)
    }
  }
}
</script>

<style scoped>
.down{
  position:absolute;
  top:15px;
  left:380px;
  cursor: pointer;
}

.page-box{
  display:flex;
}
.demonstration{
  height:32px;
  line-height:32px;
  font-size: 14px;
}
</style>
