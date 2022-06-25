<template>
  <!-- start features five -->
  <section id="features-wrap" class="features-five p-t-b-80">
    <b-container>
      <b-row>
        <b-col lg="5">
          <h2 class="font-weight-bold">{{ heading }}</h2>
          <p>{{ description }}</p>

          <b-row>
            <b-col
              md="12"
              class="mt-4"
              :class="{'mb-4':key!=2}"
              v-for="(featureThree, key) in featuresThree"
              :key="key"
            >
              <div class="benefits-contents d-flex">
                <i :class="featureThree.icon" class="eva mr-2 text-28"></i>
                <div class="benefits-contents__info">
                  <h3 class="card-title font-weight-bold">
                    {{ featureThree.title }}
                  </h3>
                  <span class="text-15">
                    {{ featureThree.desc }}
                  </span>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="5" class="offset-lg-1 d-flex align-items-center">
          <div class="benefits-left-img mb-4 aos-init aos-animate ">
            <img src="@/assets/images/landing/svg/service_3-1.svg" alt="" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <!-- features five end -->
</template>
<script>
export default {
  data() {
    return {
      heading: "Some Awesome Features",

      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At velit unde cupiditate recusandae, neque dicta nisi omnis voluptates.",

      featuresThree: [
        {
          title: "Benefits",
          icon: "eva-home-outline",
          desc:
            "Lorem ipsum dolor, sit amet consectetur. Lorem ipsum dolor, sit amet consectetur."
        },
        {
          title: "Design",
          icon: "eva-color-palette-outline",
          desc:
            "Lorem ipsum dolor, sit amet consectetur. Lorem ipsum dolor, sit amet consectetur."
        },
        {
          title: "Design",
          icon: "eva-globe-2-outline",
          desc:
            "Lorem ipsum dolor, sit amet consectetur. Lorem ipsum dolor, sit amet consectetur."
        }
      ]
    };
  }
};
</script>

