<template>
  <ChineseLayout>
  <About></About>
  <Office></Office> 
  <Team></Team> 
  </ChineseLayout>
</template>

<script>
import BackToTop from 'vue-backtotop'
import ChineseLayout from '~/layouts/Chinese.vue'
import Office from '~/components/cn/Office.vue'
import About from '~/components/cn/About.vue'
import Team from '~/components/cn/Team.vue'

export default {

  metaInfo: {
    title: '关于'
  },

  components: {
    ChineseLayout,
    About,
    Office,
    Team
  }
}
</script>