<template>
  <EnglishLayout>
  <ClientOnly>
  <Pricing></Pricing>
  </ClientOnly>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Pricing from '~/components/en/Pricing.vue'

export default {

  metaInfo: {
    title: 'Pricing'
  },

  components: {
    EnglishLayout,
    Pricing
  }
}
</script>