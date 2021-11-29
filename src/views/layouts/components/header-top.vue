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
        { name: '哈哈哈1', url: '/info-overview' },
        { name: '哈哈哈2', url: '/search-texts' },
        { name: '哈哈哈3', url: '/hot-news' },
        { name: '哈哈哈4', url: '/monitor-target' },
        { name: '哈哈哈5', url: '/user' }
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
