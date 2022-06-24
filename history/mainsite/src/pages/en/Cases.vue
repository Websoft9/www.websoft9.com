<template>
  <EnglishLayout>
  <Cases></Cases>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Cases from '~/components/en/Cases.vue'

export default {

  metaInfo: {
    title: 'Customer success stories'
  },

  components: {
    EnglishLayout,
    Cases
  }
}
</script>