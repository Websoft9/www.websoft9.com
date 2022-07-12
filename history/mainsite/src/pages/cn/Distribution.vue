<template>
  <ChineseLayout>
    <Distribution></Distribution>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Distribution from '~/components/cn/Distribution.vue'

export default {

  metaInfo: {
    title: '应用分发'
  },

  components: {
    ChineseLayout,
    Distribution
  }
}
</script>