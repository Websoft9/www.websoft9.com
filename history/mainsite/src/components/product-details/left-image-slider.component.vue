<template>
  <section class="left-image-wrap p-t-b-80">
    <b-container>
      <b-row>
        <b-col md="12" class=" section-header mb-5">
          <h2 class="font-weight-bold">We Ready to Provide</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </b-col>
        <b-col md="6" sm="12" class=" mb-5 mb-lg-0 mb-md-0 mt-mb-5">
          <div class="left-image-carousel">
            <div>
              <carousel
                :autoplay="true"
                :dots="false"
                :nav="false"
                :responsive="{
                  0: { items: 1, nav: true, navText: false },
                  600: { items: 1, nav: true, navText: false }
                }"
              >
                <div v-for="(image, key) in images" :key="key">
                  <img class="img-responsive w-100 mb-4" :src="image.path" />
                </div>
              </carousel>
            </div>
          </div>
        </b-col>

        <b-col md="5" sm="12" class="offset-md-1">
          <b-row>
            <b-col md="12" sm="6"  class="mb-4">
              <b-card class="">
                <div class=" ">
                  <h4 class="card-title font-weight-bold">
                    Sales and Marketing Alignment
                  </h4>
                  <p class="m-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                </div>
              </b-card>
            </b-col>
            <!-- end of col  -->
            <b-col md="12" sm="6" class="mb-4">
              <b-card class="">
                <div class="">
                  <h4 class="card-title font-weight-bold">
                    Relationship-based Engagement
                  </h4>
                  <p class="m-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                </div>
              </b-card>
            </b-col>
            <!-- end of col  -->
            <b-col md="12" sm="6"  class="mb-lg-0 mb-md-0 mb-sm-0">
              <b-card class="">
                <div class=" ">
                  <h4 class="card-title font-weight-bold">
                    Transparent Pricing
                  </h4>
                  <p class="m-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                </div>
              </b-card>
            </b-col>
            <!-- end of col  -->
          </b-row>
        </b-col>
        <!-- end of col6 row -->
      </b-row>
    </b-container>
  </section>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  data() {
    return {
      images: [
        {
          path: require("@/assets/images/landing/svg/slider4.svg")
        },
        {
          path: require("@/assets/images/landing/svg/slider3.svg")
        },
        {
          path: require("@/assets/images/landing/svg/slider2.svg")
        }
      ]
    };
  }
};
</script>
<style>
</style>
