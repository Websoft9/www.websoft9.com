<template>
  <ChineseLayout>
  <Pricing></Pricing>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Pricing from '~/components/cn/Pricing.vue'

export default {

  metaInfo: {
    title: '价格'
  },

  components: {
    ChineseLayout,
    Pricing
  }
}
</script>