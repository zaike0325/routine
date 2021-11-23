<template>
    <div>
      <div>
          <left-nav></left-nav>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import leftNav from './components/left-nav.vue'
export default {
  name: 'userIndex',
  components: {
    leftNav
  }
}
</script>

<style lang="scss" scoped>

</style>
