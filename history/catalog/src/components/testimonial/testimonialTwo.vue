<template>
  <section id="testimonials-wrap" class="testimonial-wrap p-t-b-80">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </b-col>

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
              <div
                v-for="(test, key) in testimonialContent"
                :key="key"
                class="m-3  single-testimonial-wrap"
              >
                <b-card class="p-3">
                    <p class="mb-4">{{ test.testContent }}</p>

                    <div class="test-user-details text-left abs">
                      <div class="user-img w-20 float-left mr-1">
                        <img
                          :src="test.testImage"
                          class="rounded-circle"
                          alt=""
                        />
                      </div>
                      <span
                        class="user-name font-weight-bold mt-1 w-75 float-right"
                        >{{ test.testName }}</span
                      >
                      <span class="user-designation w-75 float-right">{{
                        test.testJob
                      }}</span>
                    </div>
                </b-card>
                
              </div>
            </carousel>
          </div>
        </b-col>

        <!-- end of single testimonial -->
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
      heading: "What our customers says",
      subHeading:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.",
      testimonialContent: [
        {
          testImage: require("@/assets/images/landing/faces/15.jpg"),
          testContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          testName: "Jhon Doe",
          testJob: "Product Manager"
        },
        {
          testImage: require("@/assets/images/landing/faces/2.jpg"),
          testContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          testName: "Alex Dan",
          testJob: "Creative Manager"
        },
        {
          testImage: require("@/assets/images/landing/faces/3.jpg"),
          testContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          testName: "Smith Doe",
          testJob: "Assistant Director"
        },
        {
          testImage: require("@/assets/images/landing/faces/5.jpg"),
          testContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          testName: "Micheal Clark",
          testJob: "Marketing Manager"
        },
        {
          testImage: require("@/assets/images/landing/faces/13.jpg"),
          testContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          testName: "Gray Simon",
          testJob: "Production Leader"
        },
        {
          testImage: require("@/assets/images/landing/faces/12.jpg"),
          testContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          testName: "Jessica June",
          testJob: "Frontend Developer"
        }
      ]
    };
  }
};
</script>
