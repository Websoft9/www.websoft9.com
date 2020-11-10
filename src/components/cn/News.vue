<template>

<div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>公司新闻</h2>
                    </div>
                </div>
			</div>
			
        </div>
        <!-- End Page Title -->


        <!-- Start Blog Area -->
		<section class="blog-area ptb-80">
			<div class="container">
				<div class="row">
					<div v-for="edge in $static.allBlogPost.edges" :key="edge.node.id" class="col-lg-4 col-md-6">
						<div class="single-blog-post">
							<div class="blog-image">
								<a :href= "edge.node.url">
									<img :src="edge.node.feature_image" alt="image">
								</a>

								<div class="date">
									<feather type="calendar"></feather> {{ edge.node.created_at}}
								</div>
							</div>

							<div class="blog-post-content">
								<h3><a :href= "edge.node.url" target="_blank">{{ edge.node.title }}</a></h3>
							</div>
						</div>
					</div>
					
					<div class="col-lg-12 col-md-12">
						<div class="pagination-area">
							<nav aria-label="Page navigation">
								<ul class="pagination justify-content-center">
									<li class="page-item"><a class="page-link" href="#">Prev</a></li>
									<li class="page-item active"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">Next</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Blog Area -->
</div>


</template>

<script>
import { Pager } from 'gridsome'
export default {
  components: {
    Pager
  },
    name: 'News'
}
</script>

<static-query>
query($page: Int){
    allBlogPost: allGhostPost(filter: { tags: { contains:"5f98c30a04180f0001c3bda"}},perPage: 200, page: $page) @paginate {
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
		feature_image
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
</static-query>