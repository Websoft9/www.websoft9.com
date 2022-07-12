<template>
  <ChineseLayout>
    <Partner></Partner>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Partner from '~/components/cn/Partner.vue'

export default {

  metaInfo: {
    title: '合作伙伴'
  },

  components: {
    ChineseLayout,
    Partner
  }
}
</script>