<template>
  <Layout>
    <div>
      <div v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" > 

        <a :href= "edge.node.url"  target="_blank">{{ edge.node.title }}</a>
        <!-- <a class="a-style" @click="linkDownload('{{edge.node.url }}')">{{ edge.node.title }}</a> -->
        <!-- <g-link :to="{{ edge.node.url }}">{{ edge.node.title }}</g-link> -->
      </div>
    </div>
    --{{$page.allBlogPost.edges[0].node.title}}
    <Pager :info="$page.allBlogPost.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
function linkDownload (url) {
      window.open(url,'_blank') // 新窗口打开外链接
}

export default {
  components: {
    Pager
  }
}  
</script>

<page-query>
query($page: Int){
    allBlogPost: allGhostPost(perPage: 10, page: $page) @paginate {
 			totalCount
      pageInfo {
        totalPages
        currentPage
      }
    edges {
      node {
        title
        id
        slug
        comment_id
        plaintext
        html
        meta_title
        path
        meta_description
        tags {
          name
          id
        }
        created_at
        authors {
          id
          name
        }
        url
      }
    }
  }
}
</page-query>