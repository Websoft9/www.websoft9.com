<template>
  <ChineseLayout>
    <Support></Support>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Position from '~/components/cn/Position.vue'
import Support from '~/components/cn/Support.vue'
import Office from '~/components/cn/Office.vue'

export default {

  metaInfo: {
    title: '技术支持'
  },

  components: {
    ChineseLayout,
    Position,
    Support,
    Office
  }
}
</script>