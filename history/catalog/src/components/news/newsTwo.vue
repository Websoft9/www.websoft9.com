<template>
  <!-- start::news-two -->

  <section id="news-wrap" class="news-two-wrap light-gray p-t-b-80">
    <b-container >
      <b-row >
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">Recent News From Blog</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          md="6" sm="12"
          class=" mb-lg-0 mb-md-0 mb-4"
          v-for="(anchorTwo, key) in newsTwo"
          :key="key"
        >
          <b-card class="text-left o-hidden">
            <div class="card_img_left w-40 float-left">
              <img class="card-img" :src="anchorTwo.bg_svg" alt="Card image" />
            </div>

            <div class="card_right_content w-60 p-3 float-right">
              <div class="pt-3 pb-4">
                <h3 class="m-0 text-capitalize font-weight-bold">
                  {{ anchorTwo.title }}
                </h3>
                <h5 class="font-weight-light text-uppercase">
                  {{ anchorTwo.author }}
                </h5>
              </div>

              <div class="font-weight-light pb-3">
                <p>{{ anchorTwo.description }}</p>

                <a
                  routerLink="/landing/blog-details"
                  class="btn half-button btn-gradient text-white"
                  >Read More</a
                >
              </div>
            </div>
          </b-card>
        </b-col>
        <!-- end of col -->
        <!-- <div class="col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-0">
          <div class="card text-left o-hidden">
            <div class="card_img_left w-40 float-left">
              <img class="card-img" src="@/assets/images/landing/news/news2.svg" alt="Card image">
            </div>

            <div class="card_right_content w-60 p-3 float-right">
              <div class="pt-3 pb-4">
                <h3 class="m-0 text-capitalize font-weight-bold">Never look backward</h3>
                <h5 class="font-weight-light text-uppercase">by Smith Doe</h5>
              </div>

              <div class="font-weight-light pb-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas.</p>

                <a routerLink="/landing/blog-details" class="btn btn-gradient">Read More</a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- end of col -->
      </b-row>
    </b-container>
  </section>
  <!-- end::news-wo -->
</template>
<script>
export default {
  data() {
    return {
      newsTwo: [
        {
          bg_svg: require("@/assets/images/landing/news/news1.svg"),
          title: "Beauty of Sunshine",
          author: "Alex Doe",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas."
        },
        {
          bg_svg: require("@/assets/images/landing/news/news2.svg"),
          title: "Beauty of Sunshine",
          author: "Alex Doe",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas."
        }
      ]
    };
  }
};
</script>

