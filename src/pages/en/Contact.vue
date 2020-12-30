<template>
  <EnglishLayout>
    <Contact></Contact>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Contact from '~/components/en/Contact.vue'

export default {

  metaInfo: {
    title: 'Contact Us'
  },

  components: {
    EnglishLayout,
    Contact
  }
}
</script>