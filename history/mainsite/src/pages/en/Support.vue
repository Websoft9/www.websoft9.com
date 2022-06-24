<template>
  <EnglishLayout>
    <Support></Support>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Position from '~/components/en/Position.vue'
import Support from '~/components/en/Support.vue'
import Office from '~/components/en/Office.vue'

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