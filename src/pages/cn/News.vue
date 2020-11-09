<template>
  <ChineseLayout>
    <News></News>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import News from '~/components/cn/News.vue'

export default {

  metaInfo: {
    title: '公司新闻'
  },

  components: {
    ChineseLayout,
    News
  }
}
</script>