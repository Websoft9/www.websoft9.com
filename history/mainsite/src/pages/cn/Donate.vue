<template>
  <ChineseLayout>
  <Donate></Donate>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Donate from '~/components/cn/Donate.vue'

export default {

  metaInfo: {
    title: '捐赠我们'
  },

  components: {
    ChineseLayout,
    Donate
  }
}
</script>