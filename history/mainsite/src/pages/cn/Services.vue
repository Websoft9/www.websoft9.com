<template>
  <ChineseLayout>
    <Services></Services>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Services from '~/components/cn/Services.vue'

export default {

  metaInfo: {
    title: '服务市场'
  },

  components: {
    ChineseLayout,
    Services
  }
}
</script>