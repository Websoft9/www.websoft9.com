<template>
  <!-- start right image section -->

  <section class="right-image-wrap p-t-b-80 light-gray">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">{{ heading }}</h2>
          <p>{{ title }}</p>
        </b-col>

        <b-col md="12" lg="6" sm="12" class="mb-4 mb-lg-0">
          <b-row class="m-0">
            <b-col md="6" sm="6"
              class="mb-4"
              v-for="(content, key) in contents"
              :key="key"
            >
              <div class="card">
                <div class="card-body d-flex pt-4 pb-4">
                  <div class="mr-2">
                    <i :class="content.icon" class="eva mr-1 text-36"></i>
                  </div>
                  <div class>
                    <h4 class="card-title font-weight-bold">
                      {{ content.contentTitle }}
                    </h4>
                    <p class="m-0">{{ content.description }}</p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <!-- end of col6 row -->
        <b-col md="12" lg="5" sm="12"  class="offset-lg-1">
          <div class="right-image-carousel">
            <carousel
              :autoplay="false"
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
        </b-col>
      </b-row>
    </b-container>
  </section>

  <!-- end right image section -->
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      heading: "What Customer Love Most",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.",
      images: [
        {
          path: require("@/assets/images/landing/svg/slider6.svg")
        },
        {
          path: require("@/assets/images/landing/svg/slider9.svg")
        },
        {
          path: require("@/assets/images/landing/svg/slider8.svg")
        }
      ],
      contents: [
        {
          icon: "eva-pie-chart-outline",
          contentTitle: "Full Analytics",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
        {
          icon: "eva-clock-outline",
          contentTitle: "Diagnose quickly",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
        {
          icon: " eva-lock-outline",
          contentTitle: "Safe & Secure",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
        {
          icon: "eva-pricetags-outline",
          contentTitle: "Best Pricing",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text."
        }
      ]
    };
  }
};
</script>
