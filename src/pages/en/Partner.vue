<template>
  <EnglishLayout>
    <Partner></Partner>
    <Clouds></Clouds>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Partner from '~/components/en/Partner.vue'
import Clouds from '~/components/en/Clouds.vue'

export default {

  metaInfo: {
    title: 'Partner'
  },

  components: {
    EnglishLayout,
    Partner,
    Clouds
  }
}
</script>