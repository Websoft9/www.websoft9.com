<template>
  <ChineseLayout>
    <ServiceDetail></ServiceDetail>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import ServiceDetail from '~/components/cn/Servicedetail.vue'

export default {

  metaInfo: {
    title: '服务详细'
  },

  components: {
    ChineseLayout,
    ServiceDetail
  }
}
</script>