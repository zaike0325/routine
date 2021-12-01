<template>
  <div>
    <!-- 这是默认首页 -->
    <!-- <el-select v-model="value" ref="inputVal" @input.native='debouncedOnInputChange' multiple filterable placeholder="请选择"> -->
    <el-select v-model="value" ref="inputVal" :filter-method='filterFun' multiple filterable @visible-change="() => (keyword = '')" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :name="item.name"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'infoIndex',
  data () {
    return {
      value: '',
      keyword: '',
      list: [
        {
          value: '选项1',
          label: '黄金糕',
          name: 'huang'
        },
        {
          value: '选项2',
          label: '双皮奶',
          name: 'shuang'
        },
        {
          value: '选项3',
          label: '蚵仔煎',
          name: 'hezaijian'
        },
        {
          value: '选项4',
          label: '龙须面',
          name: 'longxumian'
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          name: 'beijingkaoya'
        }
      ]
    }
  },
  computed: {
    optionsCopy () {
      return this.list
    },
    options () {
      console.log(this.keyword)
      if (this.keyword === '') {
        return this.optionsCopy
      } else {
        return this.optionsCopy.filter(item => {
          return (
            String(item.label)
              .toUpperCase()
              .includes(this.keyword.toUpperCase()) ||
            String(item.name)
              .toUpperCase()
              .includes(this.keyword.toUpperCase())
          )
        })
      }
    }
  },
  methods: {
    filterFun (item) {
      this.keyword = item
    },
    debouncedOnInputChange (val) {
      console.log(val.target.value)
      //   console.log(this.$refs.inputVal.value)
      const valName = val.target.value
      console.log(valName)
      //   var reg = /^[a-zA-Z]+$/
      if (valName) { // val存在
        // console.log(this.optionsCopy, '++++++++++++')
        this.options = this.optionsCopy.filter((item) => {
        //   if (reg.test(valName)) {
          if (item.name.toUpperCase().indexOf(valName.toUpperCase()) !== -1 || item.label.toUpperCase().indexOf(valName.toUpperCase()) !== -1 || item.name.indexOf(valName) !== -1 || item.label.indexOf(valName) !== -1) {
            console.log(item.name, item.label, '==========')
            return true
          }
        //   } else {
        // if (item.name.indexOf(valName) !== -1 || item.label.indexOf(valName) !== -1) {
        //   console.log(item.name, item.label, '+++++++++++')
        //   return true
        // }
        //   }
        })
        console.log(this.options)
        this.options = this.optionsCopy
      } else { // val为空时，还原数组
        this.options = this.optionsCopy
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
