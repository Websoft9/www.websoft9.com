<template>
  <ChineseLayout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </ChineseLayout>
</template>



<script>
import ChineseLayout from '~/layouts/Chinese.vue'

export default {

  metaInfo: {
    title: '合作伙伴'
  },

  components: {
    ChineseLayout,
    Partner
  }
}
</script>