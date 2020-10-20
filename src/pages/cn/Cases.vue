<template>
  <ChineseLayout>
  <Cases></Cases>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Cases from '~/components/cn/Cases.vue'

export default {

  metaInfo: {
    title: '客户案例'
  },

  components: {
    ChineseLayout,
    Cases
  }
}
</script>