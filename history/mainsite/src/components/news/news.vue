<template>
  <!-- start::news -->

  <section id="news-wrap" class="news-wrap light-gray p-t-b-80">
    <b-container >
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">{{ heading }}</h2>
          <p>{{ paragraph }}</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" sm="6" 
          class=" mb-lg-0 mb-md-0 mb-4"
          v-for="(anchor, key) in news"
          :key="key"
        >
          <b-card class="bg-dark text-white o-hidden">
            <img class="card-img" :src="anchor.news_bg_img" alt="Card image" />
            <div class="card-img-overlay">
              <div class="text-center pt-4">
                <h3 class="font-weight-bold mb-2 text-white">
                  {{ anchor.title }}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  reprehenderit, sequi quisquam repellendus corporis adipisci
                  veniam! Mollitia suscipit excepturi laboriosam rem ut
                  voluptas.
                </p>

                <a routerLink="/landing/blog-details" class="btn  btn-gradient"
                  >Read More</a
                >
              </div>
              <div class="p-1 text-left card-footer font-weight-light">
                <span class="mr-2"
                  ><i class="eva eva-message-circle-outline text-white mr-1"></i
                  >12
                </span>
                <span class="mr-2"
                  ><i class="eva eva-calendar-outline text-white mr-1"></i
                  >03.12.2018</span
                >
                <span class=""
                  ><i class="eva eva-person-outline text-white mr-1"></i>Alex
                  Doe</span
                >
              </div>
            </div>
          </b-card>
        </b-col>
        <!-- end of col -->
      </b-row>
    </b-container>
  </section>
  <!-- end::news -->
</template>
<script>
export default {
  data() {
    return {
      heading: "Recent News From Blog",
      paragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.",
      news: [
        {
          title: "Lorem ipsum dolor",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas.",
          news_bg_img: require("@/assets/images/landing/news/news1.jpg"),
          comments: 12,
          date: "03.12.2018",
          name: "Alex Doe"
        },
        {
          title: "Lorem ipsum dolor",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas.",
          news_bg_img: require("@/assets/images/landing/news/news4.jpg"),
          comments: 12,
          date: "03.12.2018",
          name: "Alex Doe"
        },
        {
          title: "Lorem ipsum dolor",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas.",
          news_bg_img: require("@/assets/images/landing/news/news3.jpg"),
          comments: 12,
          date: "03.12.2018",
          name: "Alex Doe"
        }
      ]
    };
  }
};
</script>

