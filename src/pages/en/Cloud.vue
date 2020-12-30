<template>
  <EnglishLayout>
    <Clouds></Clouds>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Clouds from '~/components/en/Clouds.vue'

export default {

  metaInfo: {
    title: 'Cloud'
  },

  components: {
    EnglishLayout,
    Clouds
  }
}
</script>