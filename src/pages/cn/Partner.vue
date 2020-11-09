<template>
  <ChineseLayout>
    <Partner></Partner>
    <Clouds></Clouds>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Partner from '~/components/cn/Partner.vue'
import Clouds from '~/components/cn/Clouds.vue'

export default {

  metaInfo: {
    title: '合作伙伴'
  },

  components: {
    ChineseLayout,
    Partner,
    Clouds
  }
}
</script>