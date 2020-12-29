<template>
  <EnglishLayout>
    <Support></Support>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Position from '~/components/cn/Position.vue'
import Support from '~/components/cn/Support.vue'
import Office from '~/components/cn/Office.vue'

export default {

  metaInfo: {
    title: 'Support'
  },

  components: {
    EnglishLayout,
    Position,
    Support,
    Office
  }
}
</script>