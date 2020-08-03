const Mock = require('mockjs')

const Random = Mock.Random

const dataList = Mock.mock({
  'list|1-30': [{
    'id|+1': 1,
    name: '@FIRST',
    createTime: Random.datetime()
  }]
})

Mock.mock('/api/getProdList', 'get', (req, res) => {
  return {
    data: dataList
  }
})
