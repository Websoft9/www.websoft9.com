<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>服务市场</h2>
                        <div class="bar"></div>
					    <p>针对用户、开发者（软件提供商）和合作伙伴我们提供独特的价值</p>
                    </div>
                </div>
			</div>
			
        </div>
        <!-- End Page Title -->

        <!-- Start ML Services Area -->
		<section class="ml-services-area ptb-80">
			<div class="container">
                <div class="section-title">
					<h2>面向用户</h2>
					<div class="bar"></div>
					<p>从个人用户、初创企业到中大型企业，我们都提供合适的服务方案</p>
				</div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-6" v-for="edge in $static.Websoft9service.edges" :key="edge.node.id">
                        <div class="single-ml-services-box">
                            <div class="image">
                                <img src="../../assets/img/services-image/1.png" alt="image">
                            </div>
                            <h3><a href="#">{{ edge.node.name }}</a></h3>
                            <p>{{ edge.node.brief }}</p>
                        </div>
                    </div>
                </div>
			</div>
		</section>

        <!-- End ML Services Area -->
    </div>
</template>


<script>
export default {
    name: 'Services'
}
</script>

<static-query>
query Websoft9service{
     Websoft9service: allService (sort: { by: "name", order: DESC }){
      edges {
        node{
          id
          skuid
          name
          skuid
          brief
          deliver
          pricing
          detailCn
          onsite         
        }
      }
    }
}
</static-query>