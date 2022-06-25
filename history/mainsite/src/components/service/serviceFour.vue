<template>
  <!-- solution start -->
  <section id="services-wrap" class="service-three p-t-b-80 light-gray">
    <b-container class="">
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">Service Provider</h2>
          <p class="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </b-col>
        <b-col
          md="6"
          lg="4"
          v-for="(serviceFour, key) in servicesFour"
          :key="key"
          class=" mb-4"
          :class="[key == 4 || key == 5 || key == 3 ? 'mb-lg-0' : '']"
        >
          <b-card no-body class=" service-three--hover o-hidden">
            <div class="card-header p-0">
              <img class="img-fluid " :src="serviceFour.image" alt="" />
            </div>

            <b-card-body class="">
              <h5 class="card-title font-weight-bold">
                {{ serviceFour.name }}
              </h5>
              <p class="card-text">
                {{ serviceFour.desc }}
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <!-- solution end -->
</template>
<script>
export default {
  data() {
    return {
      servicesFour: [
        {
          name: "Project One",
          image: require("@/assets/images/landing/service-3/service_3-1.svg"),
          desc:
            "Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur"
        },
        {
          name: "Email Campaign",
          image: require("@/assets/images/landing/service-3/service_3-2.svg"),
          desc:
            "Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur"
        },
        {
          name: "Analaysis",
          image: require("@/assets/images/landing/service-3/service_3-3.svg"),
          desc:
            "Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur"
        },
        {
          name: "Testing",
          image: require("@/assets/images/landing/service-3/service_3-4.svg"),
          desc:
            "Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur"
        },
        {
          name: "Verifying",
          image: require("@/assets/images/landing/service-3/service_3-5.svg"),
          desc:
            "Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur"
        },

        {
          name: "Finalizing",
          image: require("@/assets/images/landing/service-3/service_3-6.svg"),
          desc:
            "Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur"
        }
      ]
    };
  }
};
</script>

