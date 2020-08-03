<template>
  <ul class="constainer">
    <li v-for="item in list" :key="item.id">
      <span>{{item.name}}</span>
      <span>{{item.createTime}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getListData()
  },
  methods: {
    getListData () {
      const url = '/api/getProdList'
      this.$http.get(url).then(res => {
        if (res.status === 200) {
          this.list = res.data.data.list
        }
      })
    }
  }
}
</script>
<style lang="less">
ul {
  li {
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 24px;
    line-height: 24px;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
