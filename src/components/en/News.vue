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
								<a :href= "edge.node.url" target="_blank">
									<img v-if="edge.node.feature_image != null" :src="edge.node.feature_image" alt="image">
                  <img v-else src="../../assets/img/blog-image/1.jpg" alt="image">
								</a>

								<div class="date">
									<feather type="calendar"></feather> {{ edge.node.created_at | formatDate}}
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
                <!-- <Pager :info="$static.allBlogPost.pageInfo"/> -->
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
  name: 'News',
  filters: {
    formatDate: function (value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d ;
    }
  }
}
</script>

<static-query>
query($page: Int){
    allBlogPost: allGhostPost(filter: { tags: { contains:"5f98c30a04180f0001c3bda"}},perPage: 6, page: $page) @paginate {
 		  
        pageInfo {
        totalPages
        currentPage
        totalItems
        isFirst
        isLast
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