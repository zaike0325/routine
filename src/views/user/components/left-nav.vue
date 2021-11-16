<template>
    <div>
      <ul>
          <router-link v-for="(item,index) in list" :to="item.url" tag='li' :key="index">{{item.name}}</router-link>
      </ul>
    </div>
</template>

<script setup>
export default {
  name: 'leftNav',
  data () {
    return {
      list: [
        { name: 'news', url: '/news' },
        { name: 'facebook', url: '/facebook' },
        { name: 'youtub', url: '/youtub' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
