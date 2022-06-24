<template>
  <!-- start work carousel -->
  <section id="works-wrap" class="work-carousel-wrap ">
    <b-container>
      <b-row>
        <div class="section-header col-md-12 mb-5">
          <h2 class="font-weight-bold">Our Works</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </div>
        <b-col md="12">
          <div class="slick-work-carousel-wrap">
            <!-- carousel item start -->
            <carousel
              :autoplay="false"
              :dots="false"
              :nav="false"
              :responsive="{
                0: { items: 1, nav: true, navText: false },
                1000: { items: 3, nav: true, navText: false }
              }"
              :slideBy="3"
            >
              <div v-for="(content, key) in images" :key="key">
                <div class="card text-left o-hidden mb-4 m-3">
                  <img
                    class="card-img-top"
                    :src="content.path"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">Project one</h5>
                    <p class="card-text">
                      Adipisci quas repellat sed. Quasi quaerat aut nam possimus
                      vitae dignissimos, sapiente est atque teneturitem.
                    </p>
                  </div>
                  <div class="card-footer pl-3">
                    <a href="#" class="btn btn-lg p-1 mr-1 text-dark">
                      <span class="eva eva-link-2-outline"></span>
                    </a>
                    <a href="#" class="btn btn-lg p-1 mr-1 text-dark">
                      <span class="eva eva-share"></span>
                    </a>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end work carousel -->
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      images: [
        {
          path: require("@/assets/images/landing/products/products9.svg")
        },
        {
          path: require("@/assets/images/landing/products/products11.svg")
        },
        {
          path: require("@/assets/images/landing/products/products15.svg")
        },
        {
          path: require("@/assets/images/landing/products/products17.svg")
        },
        {
          path: require("@/assets/images/landing/products/products13.svg")
        },
        {
          path: require("@/assets/images/landing/products/products12.svg")
        },
        {
          path: require("@/assets/images/landing/products/products17.svg")
        }
      ]
    };
  }
};
</script>
