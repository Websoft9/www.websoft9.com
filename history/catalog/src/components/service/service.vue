<template>
  <section id="services-wrap" class="services-wrap light-gray">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">Our Services</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </b-col>

        <div
          class="service-wrap col-md-6 mb-4 col-lg-3 col-sm-12"
          v-for="(service, key) in services"
          :key="key"
          :class="[
            key == 4 || key == 5 || key == 6 || key == 7 ? 'mb-lg-0' : ''
          ]"
        >
          <b-card no-body class="o-hidden ">
            <div class="card-header p-0 text-center ">
              <img class="img-responsive" :src="service.serviceImage" />
            </div>
            <b-card-body>
              <h3 class="card-title text-capitalize font-weight-bold  ">
                {{ service.serviceName }}
              </h3>
              <p class="card-text">{{ service.serviceText }}</p>
            </b-card-body>
            <b-card-footer class=" pl-3">
              <a href="#" class="btn btn-lg p-1 mr-1 text-dark">
                <span class="eva eva-link-2-outline"></span>
              </a>
              <a href="#" class="btn btn-lg p-1 mr-1 text-dark">
                <span class="eva eva-share"></span>
              </a>
            </b-card-footer>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          serviceImage: require("@/assets/images/landing/services/service1.svg"),
          serviceName: "Service One",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services9.svg"),
          serviceName: "Service Two",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services10.svg"),
          serviceName: "Service Three",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services5.svg"),
          serviceName: "Service Four",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services6.svg"),
          serviceName: "Service Five",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services14.svg"),
          serviceName: "Service Six",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services15.svg"),
          serviceName: "Service Seven",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "Service Eight",
          serviceText:
            "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula"
        }
      ]
    };
  }
};
</script>

