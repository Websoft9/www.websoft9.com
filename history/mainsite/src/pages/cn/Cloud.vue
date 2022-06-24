<template>
  <ChineseLayout>
    <Clouds></Clouds>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Clouds from '~/components/en/Clouds.vue'

export default {

  metaInfo: {
    title: 'Cloud'
  },

  components: {
    ChineseLayout,
    Clouds
  }
}
</script>