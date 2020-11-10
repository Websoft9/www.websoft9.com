<template>
  <ChineseLayout>
    <Product></Product>
    <Clouds></Clouds>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Product from '~/components/cn/Product.vue'
import Clouds from '~/components/cn/Clouds.vue'

export default {

  metaInfo: {
    title: '加入网久'
  },

  components: {
    ChineseLayout,
    Product,
    Clouds
  }
}
</script>