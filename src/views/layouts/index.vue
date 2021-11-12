<template>
    <div>
        <header-index></header-index>
        <router-view></router-view>
    </div>
</template>

<script>
import { headerIndex } from './components/header.vue'
export default ({
  name: 'layoutIndex',
  components: {
    headerIndex
  }
})
</script>

<style scoped>

</style>
