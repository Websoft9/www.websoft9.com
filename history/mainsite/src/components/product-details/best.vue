<template>
  <!-- extra features start -->
  <section class="best-wrap p-t-b-80 light-gray" id="extra-feature-wrap">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">{{ bestHeading }}</h2>
          <p>{{ bestTitle }}</p>
        </b-col>

        <b-col md="6"
          class="mb-4"
          v-for="(best, key) in bestContent"
          :key="key"
          :class="[key == 2 || key == 3 ? 'mb-lg-0' : '']"
        >
          <b-card class="o-hidden text-left">
            <div class="">
              <div class="left_icon float-left w-20 p-3 text-center">
                <i class="eva" :class="best.bestIcon"></i>
              </div>
              <div class="right_content w-70 float-left p-3">
                <h4 class="card-title font-weight-bold">
                  {{ best.bestTitle }}
                </h4>
                <p class="card-text">{{ best.bestText }}</p>
              </div>
            </div>
          </b-card>
        </b-col>
        <!-- end of col -->
      </b-row>
    </b-container>
  </section>

  <!-- extra features end -->
</template>
<script>
export default {
  data() {
    return {
      bestHeading: " What Best For you",
      bestTitle:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.",
      bestContent: [
        {
          bestTitle: "Year-Round Availability",
          bestText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          bestIcon: "eva-clock-outline"
        },
        {
          bestTitle: "Get Response Faster",
          bestText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          bestIcon: "eva-calendar-outline"
        },
        {
          bestTitle: "Security & compliance",
          bestText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          bestIcon: "eva-lock-outline"
        },
        {
          bestTitle: "Security & compliance",
          bestText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          bestIcon: "eva-book-open-outline"
        }
      ]
    };
  }
};
</script>
