<template>
  <!-- start::product-details-left-image -->
  <section
    id="product-details-left-image-wrap"
    class="product-details-left-image p-t-b-80"
  >
    <b-container class="">
      <b-row class="align-items-center">
        <b-col md="5" class="mb-4 mb-lg-0">
          <img :src="leftImage" alt="" />
        </b-col>
        <b-col md="6" class="offset-md-1">
          <div
            class="product-details-li__content  d-flex flex-row align-items-start pl-5  mt-4"
              :class="{'mb-4':key!=2}"
            v-for="(content, key) in rightContents"
            :key="key"
          >
            <div class="product-details__icons mr-4">
              <span :class="content.roundIcon" class="rounded-icon">
                <i
                  :class="content.icon"
                  class="eva eva--white  align-middle text-25"
                ></i>
              </span>
            </div>
            <div class="feature-content">
              <h4 class="font-weight-bold">{{ content.name }}</h4>
              <p>{{ content.desc }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end::product-details-left-image -->
</template>
<script>
export default {
  data() {
    return {
      leftImage: require("@/assets/images/landing/service-3/service_3-1.svg"),
      rightContents: [
        {
          name: "Mobile Friendly",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          icon: "eva-smartphone-outline",
          roundIcon: "bg-danger"
        },
        {
          name: "Responsive",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          icon: "eva-checkmark-circle-2-outline",
          roundIcon: "bg-info"
        },
        {
          name: "More Secure",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          icon: "eva-shield-outline",
          roundIcon: "bg-success"
        }
      ]
    };
  }
};
</script>

