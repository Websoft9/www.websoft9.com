<template>
  <div class="main-header header-fixed-default" id="home-header">
    <b-navbar
      class="navbar container w-100 navbar-expand-lg navbar-transparent bg-transparent"
      toggleable="lg"
      type=""
      variant=""
    >
      <b-navbar-brand href="#">
        <div class="logo">
          <img src="@/assets/images/landing/lOGO_d/logo_white.png" alt="" />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        class="eva eva-menu-outline text-18 text-white"
      >
      </b-navbar-toggle>

      <!-- <div class="menu-toggle navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> -->

      <b-collapse id="nav-collapse" is-nav>
        <div style="margin: auto"></div>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="header-part-right">
          <b-nav-item href="#intro-wrap" v-smooth-scroll class="m-2"
            >Home <span class="sr-only">(current)</span></b-nav-item
          >

          <!-- <b-nav-item-dropdown
            toggle-class="nav-link-custom"
            text="Pages"
            right
          >
            <b-dropdown-item href="#">Team</b-dropdown-item>
            <b-dropdown-item href="#">Testimonial</b-dropdown-item>
            <b-dropdown-item href="#">Extra features</b-dropdown-item>
            <b-nav-item-dropdown toggle-class="" text="Second Level" right>
              <b-dropdown-item href="#">Blog</b-dropdown-item>
              <b-dropdown-item href="#">Faqs</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-item-dropdown> -->

          <!-- drop down menu start -->
          <li class="nav-item b-nav-dropdown dropdown" @click.prevent>
            <a href="#intro-demo" v-smooth-scroll  class="menu-item nav-link m-2 m-2">Demos</a>
           
          </li>
          <!-- drop down menu end -->
          <b-nav-item class="m-2" href="#news-wrap" v-smooth-scroll
            >Features</b-nav-item
          >
         
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        hash: ["#testimonials-wrap"]
      }
    };
  },
  methods: {
    handleScroll(event) {
      var scroll = window.pageYOffset;
      if (scroll >= 80) {
        document.querySelector(".main-header").classList.add("header-fixed");
      } else {
        document.querySelector(".main-header").classList.remove("header-fixed");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
</style>
