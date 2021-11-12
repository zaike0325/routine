<template>
    <div>
        <ul>
            <li v-for="item in titleList" :key="item">{{item.name}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default ({
  name: 'headerIndex',
  data () {
    return {
      titleList: [
        { name: '数据概览', url: '' },
        { name: '全文检索', url: '' },
        { name: '热点事件', url: '' },
        { name: '事件监控', url: '' }
      ]
    }
  }
})
</script>

<style scoped>

</style>
