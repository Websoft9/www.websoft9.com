<template>
  <EnglishLayout>
  <About></About>
  <Office></Office> 
  
  <Clouds></Clouds> 
  </EnglishLayout>
</template>

<script>
import BackToTop from 'vue-backtotop'
import EnglishLayout from '~/layouts/English.vue'
import Office from '~/components/en/Office.vue'
import About from '~/components/en/About.vue'
import Clouds from '~/components/en/Clouds.vue'

export default {

  metaInfo: {
    title: 'About'
  },

  components: {
    EnglishLayout,
    About,
    Office,
    Clouds
  }
}
</script>