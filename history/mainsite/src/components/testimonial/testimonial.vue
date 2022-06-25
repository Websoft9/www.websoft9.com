<template>
  <section id="testimonials-wrap" class="testimonial-wrap p-t-b-80">
    <b-container>
      <b-row>
        <div class="section-header col-md-12 mb-5">
          <h2 class="font-weight-bold">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
        <b-col
          md="6" lg="4" sm="12"
          v-for="(test, key) in testimonialContent"
          :key="key"
          :class="[key == 4 || key == 5 || key == 3 ? 'mb-lg-0' : '']"
          class=" mb-4  single-testimonial-wrap"
        >
          <b-card class="p-3">
            <div class="">
              <p class="mb-4">{{ test.testContent }}</p>

              <div class="test-user-details text-left abs">
                <div class="user-img w-20 float-left mr-1">
                  <img :src="test.testImage" class="rounded-circle" alt="" />
                </div>
                <span
                  class="user-name font-weight-bold mt-1 w-75 float-right"
                  >{{ test.testName }}</span
                >
                <span class="user-designation w-75 float-right">{{
                  test.testJob
                }}</span>
              </div>
            </div>
          </b-card>
        </b-col>
        <!-- end of single testimonial -->
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
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
