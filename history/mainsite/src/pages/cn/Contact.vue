<template>
  <ChineseLayout>
    <Contact></Contact>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Contact from '~/components/cn/Contact.vue'

export default {

  metaInfo: {
    title: '联系我们'
  },

  components: {
    ChineseLayout,
    Contact
  }
}
</script>