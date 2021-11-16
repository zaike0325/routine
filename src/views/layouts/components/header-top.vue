<template>
    <div>
        <ul>
            <router-link v-for="(item,index) in titleList" :to="item.url" :key="index" tag="li">{{item.name}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'headerTop',
  data () {
    return {
      titleList: [
        { name: '数据概览', url: '/info-overview' },
        { name: '全文检索', url: '/search-texts' },
        { name: '热点事件', url: '/hot-news' },
        { name: '事件监控', url: '/monitor-target' },
        { name: '运营信息', url: '/user' }
      ]
    }
  }
}
</script>

<style scoped>
ul{
  display: flex;
  justify-content: center;
}
li{
  list-style: none;
  width:25%;
}
</style>
