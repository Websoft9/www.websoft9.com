<template>
  <ChineseLayout>
    <Job></Job>
    <Position></Position>
    <Office></Office>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Position from '~/components/cn/Position.vue'
import Job from '~/components/cn/Job.vue'
import Office from '~/components/cn/Office.vue'

export default {

  metaInfo: {
    title: '加入网久'
  },

  components: {
    ChineseLayout,
    Position,
    Job,
    Office
  }
}
</script>