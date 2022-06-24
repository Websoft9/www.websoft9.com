<template>
  <section class="faqs-wrap p-t-b-80" id="faqs-wrap">
    <b-container>
      <div class="row"></div>
<i-input :value.sync="value" placeholder="请输入申请城市/订单号码" style="width: 300px;height: 30px"

         class="rebuildInp" v-model='str1'></i-input>

      <b-row>
        <b-col md="6" sm="12" class="mb-4 mb-lg-0 mb-md-0 mb-4">
          <div class="section-header mb-5">
            <h2 class="font-weight-bold">Faqs</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ea quam laborum, ducimus, laboriosam sint dolorum aspernatur
              libero.
            </p>
          </div>
             
          <div style="color:#F00" v-for="edge in searchResults" :key="edge.node.id" >
            ---測試組件 以下数据从contentful获取----- 
              ID:{{ edge.node.id }}<br>
              NAME:{{ edge.node.title }}

          </div>

          ---測試組件 以下数据从contentful获取----- 
          <div role="tablist">
            <b-card no-body class="mb-4 o-hidden">
              <b-card-header header-tag="header" class="p-3" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-1
                  variant="bg-transparent"
                  class="font-weight-700 text-14"
                  >Accordion 1</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    I start opened because
                    <code>visible</code> is
                    <code>true</code>
                  </b-card-text>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-4 ul-card__border-radius">
              <b-card-header header-tag="header" class="p-3 " role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-2
                  variant="bg-transparent"
                  class="font-weight-700 text-14"
                >
                  Accordion 2</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="o-hidden">
              <b-card-header header-tag="header" class="p-3" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-3
                  variant="bg-transparent"
                  class="font-weight-700 text-14"
                >
                  Accordion 3</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <!-- end of col -->
        <b-col md="5" class="offset-md-1 col-sm-12 d-flex align-items-center">
          <img
            src="@/assets/images/landing/svg/faqs2.svg"
            class="img-responsive w-100"
            alt
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
  
</template>
<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          
        `
    };
  },
  computed: {
    searchResults() {
      return this.$page.xu.edges.filter(post => {
          var test1 = post.node.title.includes("Zammad")
          var test2 = post.node.id.includes("5ISP0zt3tv0qnnANmnff3n")
          return test2 || test1
      })
    }
  } 
};
</script>
<style scoped>
</style>
<page-query>
query yourtest {
  xu:allContentfulProduct {
    edges {
      node {
        id
        summary
        date
        locale
        catalog{
          key
          title
          description
        }
        title
        description
      }
    }
  }
}
</page-query>