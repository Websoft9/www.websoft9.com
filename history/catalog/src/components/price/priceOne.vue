<template>
  <!-- start::price-1 -->
  <section id="pricing-wrap" class="pricing-one-wrap p-t-b-80">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">{{ heading }}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </b-col>
        <b-col
          md="6" sm="6" lg="3" 
          class="mb-lg-0  mb-4  pricing-single-wrap"
        >
          <div class="card  o-hidden">
            <div class="card-header  text-center p-3 mb-2">
              <h3 class="card-title font-weight-bold mb-2 text-uppercase">
                Developer
              </h3>
              <p class="text-uppercase mb-0">Basic</p>
            </div>
            <div class="card-body pt-0 text-center">
              <p class="card-text  mb-2">
                <span class="money text-shadow  text-45 font-weight-bold"
                  ><sup class="text-30 font-weight-normal">$</sup>9</span
                >.00
                <span>/Month</span>
              </p>
              <div class="offer-lists mb-4">
                <ul class="list-group  list-group-flush">
                  <li class="list-group-item p-1 ">1 Users access</li>
                  <li class="list-group-item p-1 ">10 GB of Bandwidth</li>
                  <li class="list-group-item p-1 text-muted">
                    Unlimited secure storage
                  </li>

                  <li class="list-group-item p-1 text-muted">
                    24/7 phone support
                  </li>
                  <li class="list-group-item p-1 text-muted">Analytics</li>
                  <li class="list-group-item p-1 text-muted">
                    Advanced branding
                  </li>
                </ul>
              </div>

              <a
                href="#"
                class="btn btn-gradient half-button  pl-5 pr-5 pt-2 pb-2 "
                >Select</a
              >
            </div>
          </div>
        </b-col>
        <!-- end of card -->
        <b-col sm="6" md="6" lg="3"
          class="b-card mb-lg-0  mb-4  pricing-single-wrap"
        >
          <b-card no-body class=" o-hidden">
            <div
              class="card-header text-center p-3 mb-2 bg-gradient text-white"
            >
              <h3
                class="card-title text-white font-weight-bold mb-2 text-uppercase"
              >
                starter
              </h3>
              <p class="text-uppercase mb-0">Basic</p>
            </div>
            <b-card-body class="card-body pt-0 text-center">
              <p class="card-text  mb-2">
                <span class="money text-shadow  text-45 font-weight-bold"
                  ><sup class="text-30 font-weight-normal">$</sup>20</span
                >.00
                <span>/Month</span>
              </p>
              <div class="offer-lists mb-4">
                <ul class="list-group  list-group-flush">
                  <li class="list-group-item p-1 ">5 Users access</li>
                  <li class="list-group-item p-1 ">20 GB of Bandwidth</li>
                  <li class="list-group-item p-1 ">Unlimited secure storage</li>

                  <li class="list-group-item p-1 text-muted">
                    24/7 phone support
                  </li>
                  <li class="list-group-item p-1 text-muted">Analytics</li>
                  <li class="list-group-item p-1 text-muted">
                    Advanced branding
                  </li>
                </ul>
              </div>

              <a
                href="#"
                class="btn btn-gradient half-button  pl-5 pr-5 pt-2 pb-2 "
                >Select</a
              >
            </b-card-body>
          </b-card>
        </b-col>
        <!-- end of card -->
        <b-col sm="6" md="6" lg="3"
          class="mb-lg-0 mb-md-0 mb-sm-0 mb-4  pricing-single-wrap"
        >
          <b-card no-body  class=" o-hidden">
            <div class="card-header text-center p-3 mb-2 ">
              <h3 class="card-title font-weight-bold mb-2 text-uppercase">
                business
              </h3>
              <p class="text-uppercase mb-0">Basic</p>
            </div>
            <b-card-body class="pt-0 text-center">
              <p class="card-text  mb-2">
                <span class="money text-shadow  text-45 font-weight-bold"
                  ><sup class="text-30 font-weight-normal">$</sup>60</span
                >.00
                <span>/Month</span>
              </p>
              <div class="offer-lists mb-4">
                <ul class="list-group  list-group-flush">
                  <li class="list-group-item p-1 ">10 Users access</li>
                  <li class="list-group-item p-1 ">40 GB of Bandwidth</li>
                  <li class="list-group-item p-1 ">Unlimited secure storage</li>

                  <li class="list-group-item p-1 ">24/7 phone support</li>
                  <li class="list-group-item p-1 text-muted">Analytics</li>
                  <li class="list-group-item p-1 text-muted">
                    Advanced branding
                  </li>
                </ul>
              </div>

              <a
                href="#"
                class="btn btn-gradient half-button  pl-5 pr-5 pt-2 pb-2 "
                >Select</a
              >
            </b-card-body>
          </b-card>
        </b-col>
        <!-- end of card -->
        <b-col sm="6" md="6" lg="3"
          class=" mb-lg-0 mb-md-0 mb-sm-0   pricing-single-wrap"
        >
          <b-card no-body  class="o-hidden">
            <div class="card-header text-center p-3 mb-2">
              <h3 class="card-title font-weight-bold mb-2 text-uppercase">
                enterprise
              </h3>
              <p class="text-uppercase mb-0">Basic</p>
            </div>
            <b-card-body class="card-body pt-0 text-center">
              <p class="card-text  mb-2">
                <span class="money text-shadow  text-45 font-weight-bold"
                  ><sup class="text-30 font-weight-normal">$</sup>100</span
                >.00
                <span>/Month</span>
              </p>
              <div class="offer-lists mb-4">
                <ul class="list-group  list-group-flush">
                  <li class="list-group-item p-1 ">20 Users access</li>
                  <li class="list-group-item p-1 ">Unlimited Bandwidth</li>
                  <li class="list-group-item p-1 ">Unlimited secure storage</li>

                  <li class="list-group-item p-1 ">24/7 phone support</li>
                  <li class="list-group-item p-1 ">Analytics</li>
                  <li class="list-group-item p-1 ">Advanced branding</li>
                </ul>
              </div>

              <a
                href="#"
                class="btn btn-gradient half-button  pl-5 pr-5 pt-2 pb-2 "
                >Select</a
              >
            </b-card-body>
          </b-card>
        </b-col>
        <!-- end of card -->
      </b-row>
    </b-container>
  </section>
  <!-- end::price-1 -->
</template>
<script>
export default {
  data() {
    return {
      heading: "Choose a Plan",
      subHeading: "",
      priceOne: [
        {
          name: "asd"
        }
      ]
    };
  }
};
</script>

