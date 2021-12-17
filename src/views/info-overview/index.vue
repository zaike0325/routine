<template>
  <div>
    <!-- 这是默认首页 -->
    <!-- <el-select v-model="value" ref="inputVal" @input.native='debouncedOnInputChange' multiple filterable placeholder="请选择"> -->
    <!-- <el-select v-model="value" ref="inputVal" :filter-method='filterFun' multiple filterable @visible-change="() => (keyword = '')" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :name="item.name"
      >
      </el-option>
    </el-select> -->
    <!-- <input-tags v-model='tags'></input-tags> -->
    <tags-input></tags-input>
  </div>
</template>

<script>
// import inputTags from '@/components/input-tags.vue'
export default {
  name: 'infoIndex',
  components: {
    // inputTags
  },
  data () {
    return {
      tags: [1, 2, 3]
      // value: '',
      // keyword: '',
      // list: [
      //   {
      //     value: '选项1',
      //     label: '黄金糕',
      //     name: 'huang'
      //   },
      //   {
      //     value: '选项2',
      //     label: '双皮奶',
      //     name: 'shuang'
      //   },
      //   {
      //     value: '选项3',
      //     label: '蚵仔煎',
      //     name: 'hezaijian'
      //   },
      //   {
      //     value: '选项4',
      //     label: '龙须面',
      //     name: 'longxumian'
      //   },
      //   {
      //     value: '选项5',
      //     label: '北京烤鸭',
      //     name: 'beijingkaoya'
      //   }
      // ]
    }
  },
  // computed: {
  //   optionsCopy () {
  //     return this.list
  //   },
  //   options () {
  //     console.log(this.keyword)
  //     if (this.keyword === '') {
  //       return this.optionsCopy
  //     } else {
  //       return this.optionsCopy.filter(item => {
  //         return (
  //           String(item.label)
  //             .toUpperCase()
  //             .includes(this.keyword.toUpperCase()) ||
  //           String(item.name)
  //             .toUpperCase()
  //             .includes(this.keyword.toUpperCase())
  //         )
  //       })
  //     }
  //   }
  // },
  methods: {
    // filterFun (item) {
    //   this.keyword = item
    // }
  }
}
// const guid = (function () {
//   var t = new Date().getTime()
//   var uid = 0
//   return function (prefix) {
//     return (prefix != null ? prefix : '') + (t + uid++).toString(16)
//   }
// })()
// console.log(guid(123))
function dateFormat (date, fmt = 'yyyy-mm-dd') {
  date = new Date(date)

  let ret
  const opt = {
    'y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'h+': date.getHours().toString(), // 时
    'i+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString() // 秒
  }

  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)

    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
    }
  }

  return fmt
}
console.log(dateFormat(new Date(), '2010-1-6'))
// console.log(time, '=')
</script>

<style lang="scss" scoped>
</style>
