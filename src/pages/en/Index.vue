<template>
  <ChineseLayout>
    <Banner></Banner>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/English.vue'
import Banner from '~/components/en/Banner.vue'

export default {

  metaInfo: {
    title: 'Cloud native application for Open source software'
  },

  components: {
    ChineseLayout,
    Banner
  }
}
</script>